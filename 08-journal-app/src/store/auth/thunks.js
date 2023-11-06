import {
	loginWithEmail,
	logoutFirebase,
	registerUserWithEmail,
	signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesOnLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

/* eslint-disable no-unused-vars */
export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGoogle();
		// console.log({ restult });
		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startCraetingUserWithEmail = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({
			email,
			password,
			displayName,
		});

		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(login({ email, displayName, photoURL, uid }));
	};
};

export const startLoginWithEmail = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await loginWithEmail({
			email,
			password,
		});

		if (!result.ok) return dispatch(logout(result));

		dispatch(login(result));
	};
};

export const startLogOut = () => {
	return async (dispatch) => {
		await logoutFirebase();
		dispatch(clearNotesOnLogout());
		dispatch(logout({}));
	};
};
