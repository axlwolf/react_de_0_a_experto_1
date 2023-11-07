/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
	name: "journal",
	initialState: {
		isSaving: false,
		savedMessage: "",
		notes: [],
		activeNote: null,
		// active: {
		// 	id: 123,
		// 	title: "",
		// 	body: "",
		// 	date: 123456789,
		// 	imageUrls: [],
		// },
	},
	reducers: {
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action) => {
			state.activeNote = action.payload;
			state.savedMessage = "";
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
			// TODO: error message pending
			state.savedMessage = "";
		},
		updateNote: (state, action) => {
			state.isSaving = false;
			state.notes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}
				return note;
			});

			// TODO: show update message pending
			state.savedMessage = `${action.payload.title} updated successfully`;
		},
		setPhotosToActiveNote: (state, action) => {
			state.activeNote.imageUrls = [
				...state.activeNote.imageUrls,
				...action.payload,
			];
		},
		clearNotesOnLogout: (state) => {
			state.isSaving = false;
			state.savedMessage = "";
			state.activeNote = null;
			state.notes = null;
		},
		deleteNoteById: (state, action) => {
			state.activeNote = null;
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
	},
});
export const {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
	setPhotosToActiveNote,
	deleteNoteById,
	uploadingFiles,
	clearNotesOnLogout,
} = journalSlice.actions;
