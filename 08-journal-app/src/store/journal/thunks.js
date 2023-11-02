/* eslint-disable no-unused-vars */

import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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
