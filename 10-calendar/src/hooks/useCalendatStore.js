/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
//import { returnEvents } from "../store";

export const useCalendatStore = () => {
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);

	return {
		//Properties

		activeEvent,
		events,
		//Methods
	};
};
