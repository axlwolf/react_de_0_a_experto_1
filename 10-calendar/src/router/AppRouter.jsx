/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {
	const authStatus = "authenticated"; //authenticated

	return (
		<Routes>
			{authStatus === "not-authenticated" ? (
				<Route path="auth/*" element={<LoginPage />}></Route>
			) : (
				<Route path="/*" element={<CalendarPage />}></Route>
			)}

			<Route path="/*" element={<Navigate to="auth/login" />}></Route>
		</Routes>
	);
};