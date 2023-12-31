/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			// console.log(user);
			if (!user) return dispatch(logout());

			const { uid, email, displayName, photoUrl } = user;
			dispatch(login({ uid, email, displayName, photoUrl }));

			// Loading notes
			dispatch(startLoadingNotes());
		});
	}, []);

	return status;
};
