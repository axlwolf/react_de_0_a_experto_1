/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
	const { status, user, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const startLogin = async ({ email, password }) => {
		dispatch(onChecking());
		try {
			const { data } = await calendarApi.post("/auth", { email, password });
			console.log({ data });
			localStorage.setItem("token", data.token);
			localStorage.setItem("tokenInitDate", new Date().getTime());
			dispatch(onLogin({ name: data.name, uid: data.uid }));
		} catch (error) {
			console.log(error);
			dispatch(onLogout("Incorrect Credentials"));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 10);
		}
	};

	return {
		//* Properties
		status,
		user,
		errorMessage,
		//* Methods
		startLogin,
	};
};
