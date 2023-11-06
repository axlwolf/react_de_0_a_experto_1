/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";

import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../../store/journal/journalSlice";

export const SideBarItem = ({ id, title = "", body, date, imageUrls = [] }) => {
	const dispatch = useDispatch();

	const newTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + "..." : title;
	}, [title]);

	const newBody = useMemo(() => {
		return body.length > 17 ? body.substring(0, 17) + "..." : body;
	}, [body]);

	const onActiveteNote = (e) => {
		console.log(e);
		const newNote = {
			id,
			title,
			body,
			date,
			imageUrls,
		};
		dispatch(setActiveNote(newNote));
	};

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onActiveteNote}>
				<ListItemIcon>
					<TurnedInNot></TurnedInNot>
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle}></ListItemText>
					<ListItemText secondary={newBody}></ListItemText>
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
