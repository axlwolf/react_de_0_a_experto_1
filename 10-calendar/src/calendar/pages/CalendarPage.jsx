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
import { useState } from "react";
import { useUiStore, useCalendatStore } from "../../hooks";

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
	const { openDateModal } = useUiStore();
	const { events, setActiveEvent } = useCalendatStore();

	const [lastView, setLastView] = useState(
		localStorage.getItem("lastView") || "week"
	);

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: "#347cf7",
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
	};

	const onViewChanged = (event) => {
		console.log({ viewChanged: event });
		localStorage.setItem("lastView", event);
	};

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
