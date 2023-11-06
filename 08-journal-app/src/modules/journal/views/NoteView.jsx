/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";

import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, IconButton } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { ImageGallery } from "../components";
import { useForm } from "../../../hooks/useForm";

import {
	setActiveNote,
	startSavingNote,
	startUploadingFiles,
} from "../../../store/journal";

export const NoteView = () => {
	const dispatch = useDispatch();
	const { activeNote, savedMessage, isSaving } = useSelector(
		(state) => state.journal
	);
	const { body, date, title, onInputChange, formState } = useForm(activeNote);

	const dateString = useMemo(() => {
		const newDate = new Date(date).toUTCString();
		return newDate;
	}, [date]);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (savedMessage.length > 0) {
			Swal.fire("Note updated", savedMessage, "success");
		}
	}, [savedMessage]);

	const fileInputRef = useRef();

	const onSaveNote = () => {
		dispatch(startSavingNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files.length === 0) return;
		console.log(target.files);

		console.log("Uploading files...");

		//TODO: Implement the next dispatch action
		//dispatch(startUploadingFiles(target.files));
	};

	return (
		<Grid
			className="animate__animated animate__fadeIn animate__faster"
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<input
					type="file"
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: "none" }}
				/>
				<IconButton
					color="primary"
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>
				<Button
					disabled={isSaving}
					onClick={onSaveNote}
					color="primary"
					sx={{ padding: 2 }}
				>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Enter a title"
					label="Title"
					sx={{ border: "none", mb: 1 }}
					name="title"
					value={title}
					onChange={onInputChange}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="What happened today?"
					minRows={5}
					name="body"
					value={body}
					onChange={onInputChange}
				/>
			</Grid>
			{/*  */}
			<ImageGallery></ImageGallery>
		</Grid>
	);
};
