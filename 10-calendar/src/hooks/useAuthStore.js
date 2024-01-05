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

	// TODO: startRegister
	const startRegister = async ({ email, password, name }) => {
		dispatch(onChecking());
		try {
			const { data } = await calendarApi.post("/auth/new", {
				email,
				password,
				name,
			});
			console.log({ data });
			localStorage.setItem("token", data.token);
			localStorage.setItem("tokenInitDate", new Date().getTime());
			dispatch(onLogin({ name: data.name, uid: data.uid }));
		} catch (error) {
			console.log(error);
			dispatch(onLogout(error.response.data?.msg || "--"));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 10);
		}
	};

	const checkAuthToken = async () => {
		const token = localStorage.getItem("token");

		if (!token) return dispatch(onLogout());

		try {
			const { data } = await calendarApi.get("auth/renew");
			console.log(data);
			localStorage.setItem("token", data.token);
			localStorage.setItem("tokenInitDate", new Date().getTime());
			dispatch(onLogin({ name: data.name, uid: data.uid }));
		} catch (error) {
			console.log(error);
			localStorage.clear();
			dispatch(onLogout());
		}
	};

	const startLogout = () => {
		localStorage.clear();
		dispatch(onLogout());
	};

	return {
		//* Properties
		status,
		user,
		errorMessage,
		//* Methods
		checkAuthToken,
		startLogin,
		startLogout,
		startRegister,
	};
};
