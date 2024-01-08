/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import {
	onAddNewEvent,
	onDelenteEvent,
	onLoadEvents,
	onSetActiveEvent,
	onUpdateEvent,
} from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

//import { returnEvents } from "../store";

export const useCalendatStore = () => {
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);
	const { user } = useSelector((state) => state.auth);

	const setActiveEvent = (calendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startSavingEvent = async (calendarEvent) => {
		try {
			if (calendarEvent.id) {
				// Updateing event
				await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
				dispatch(onUpdateEvent({ ...calendarEvent, user }));
				return;
			}

			//Creating a new event
			const { data } = await calendarApi.post("/events", calendarEvent);

			dispatch(
				onAddNewEvent({
					...calendarEvent,
					id: data.event.id,
					user,
				})
			);
		} catch (error) {
			console.log(error);
			Swal.fire(
				"Error while saving an event",
				error.response.data?.msg,
				"error"
			);
		}
	};

	const startLoadingEvents = async () => {
		try {
			const { data } = await calendarApi.get("/events");
			const events = convertEventsToDateEvents(data.events);
			dispatch(onLoadEvents(events));
		} catch (error) {
			console.log("Loading event error...");
			console.log(error);
		}
	};

	const startDeletingEvent = () => {
		//TODO: llegar al backend
		dispatch(onDelenteEvent());
	};

	return {
		// * Properties

		activeEvent,
		events,
		hasEventSelected: !!activeEvent,

		// * Methods

		startDeletingEvent,
		setActiveEvent,
		startSavingEvent,
		startLoadingEvents,
	};
};
