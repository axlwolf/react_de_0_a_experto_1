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
		// 	iamgeUrls: [],
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
		},
		setNotes: (state, action) => {},
		setSaving: (state) => {},
		updateNote: (state, action) => {},
		deleteNoteById: (state, action) => {},
	},
});
export const {
	savingNewNote,
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
	deleteNoteById,
} = journalSlice.actions;
