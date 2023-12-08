/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import {
	onAddNewEvent,
	onDelenteEvent,
	onSetActiveEvent,
	onUpdateEvent,
} from "../store";
//import { returnEvents } from "../store";

export const useCalendatStore = () => {
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);

	const setActiveEvent = (calendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startSavingEvent = async (calendarEvent) => {
		// TODO: llegar al backend

		// Todo bien

		if (calendarEvent._id) {
			// Actualizando
			dispatch(onUpdateEvent({ ...calendarEvent }));
		} else {
			dispatch(
				onAddNewEvent({
					...calendarEvent,
					_id: new Date().getTime(),
				})
			);
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
	};
};
