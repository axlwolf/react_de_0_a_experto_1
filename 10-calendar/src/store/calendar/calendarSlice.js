import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
	title: "Boss birthday",
	notes: "We must buy the cake",
	start: new Date(),
	end: addHours(new Date(), 2),
	bgColor: "#fafafa",
	user: {
		_id: "123",
		name: "Axl Wolf",
	},
};

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		events: [tempEvent],
		activeEvent: null,
	},
	reducers: {
		returnEvents: (state) => {
			return state.events;
		},
	},
});

export const { returnEvents } = calendarSlice.actions;
