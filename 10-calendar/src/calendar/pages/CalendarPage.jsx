/* eslint-disable no-unused-vars */
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
	CalendarEventBox,
	CalendarModal,
	FabAddNew,
	FabDelete,
	NavBar,
} from "../";
import { getMassagesES, localizer } from "../../helpers";
import { useEffect, useState } from "react";
import { useUiStore, useCalendatStore, useAuthStore } from "../../hooks";

// const events = [
// 	{
// 		title: "Boss birthday",
// 		notes: "We must buy the cake",
// 		start: new Date(),
// 		end: addHours(new Date(), 2),
// 		bgColor: "#fafafa",
// 		user: {
// 			_id: "123",
// 			name: "Axl Wolf",
// 		},
// 	},
// ];

export const CalendarPage = () => {
	const { user } = useAuthStore();
	const { openDateModal } = useUiStore();
	const { events, setActiveEvent, startLoadingEvents, activeEvent } =
		useCalendatStore();

	const [lastView, setLastView] = useState(
		localStorage.getItem("lastView") || "week"
	);

	const eventStyleGetter = (event, start, end, isSelected) => {
		const isMyEvent =
			user.uid === event.user._id || user.uid === event.user.uid;

		const style = {
			backgroundColor: isMyEvent ? "#347cf7" : "#465660",
			borderRadius: "0px",
			opacity: 0.8,
			color: "white",
		};

		return {
			style,
		};
	};

	const onDoubleClick = (event) => {
		openDateModal();
	};

	const onSelect = (event) => {
		console.log({ select: event });
		setActiveEvent(event);
		console.log(activeEvent);
	};

	const onViewChanged = (event) => {
		console.log({ viewChanged: event });
		localStorage.setItem("lastView", event);
	};

	useEffect(() => {
		startLoadingEvents();
	}, []);

	return (
		<>
			<NavBar></NavBar>
			<Calendar
				culture="es"
				localizer={localizer}
				defaultView={lastView}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "calc(100vh - 80px)" }}
				messages={getMassagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEventBox,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>
			<CalendarModal></CalendarModal>
			<FabAddNew></FabAddNew>
			<FabDelete></FabDelete>
		</>
	);
};
