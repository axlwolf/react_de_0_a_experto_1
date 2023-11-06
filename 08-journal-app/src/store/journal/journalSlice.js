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
		deleteNoteById: (state, action) => {},
		uploadingFiles: (state, action) => {},
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
	uploadingFiles,
} = journalSlice.actions;
