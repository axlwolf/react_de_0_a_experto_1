/* eslint-disable no-unused-vars */

import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
	addNewEmptyNote,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
	return async (dispatch, getState) => {
		console.log("startNewNote");
		dispatch(savingNewNote());

		//uid
		const { uid } = getState().auth;

		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime(),
		};

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		//! dispatch
		// dispatch(addNewEmptyNote)
		// dispatch(setActiveNote)
		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error("user uid not exist");

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes));
	};
};

export const startSavingNote = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving);

		const { uid } = getState().auth;
		const { activeNote: note } = getState().journal;

		const noteToFireStore = { ...note };

		delete noteToFireStore.id;

		const docReg = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

		await setDoc(docReg, noteToFireStore, { merge: true });

		dispatch(updateNote(note));
	};
};

export const startUploadingFiles = (files = []) => {
	return async (dispatch) => {
		dispatch(setSaving);

		//await fileUpload(files[0]);

		const fileUploadPromises = [];

		for (const file of files) {
			fileUploadPromises.push(fileUpload(file));
		}

		const photosUrls = await Promise.all(fileUploadPromises);

		console.log(photosUrls);

		dispatch(setPhotosToActiveNote(photosUrls));
	};
};
