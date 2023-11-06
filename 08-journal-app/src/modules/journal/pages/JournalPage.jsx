/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../../store/journal";

export const JournalPage = () => {
	const dispatch = useDispatch();
	const { isSaving, activeNote } = useSelector((state) => state.journal);


	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{/* Nothing selected */}
			{/* <NothingSelectedView /> */}
			{/* NoteView */}
			{/* <NoteView></NoteView> */}
			{!!activeNote ? <NoteView></NoteView> : <NothingSelectedView />}

			<IconButton
				disabled={isSaving}
				onClick={onClickNewNote}
				size="large"
				sx={{
					color: "white",
					backgroundColor: "error.main",
					":hover": { backgroundColor: "error.main", opacity: 0.9 },
					position: "fixed",
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
