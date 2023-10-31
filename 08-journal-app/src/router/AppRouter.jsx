/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { JournalRoutes } from "../modules/journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === "checking") {
		return <CheckingAuth></CheckingAuth>;
	}

	return (
		<Routes>
			{status === "authenticated" ? (
				<Route path="/*" element={<JournalRoutes />}></Route>
			) : (
				<Route path="/auth/*" element={<AuthRoutes />}></Route>
			)}

			<Route path="/*" element={<Navigate to="/auth/login" />} />
			{/* Ruta para Login y registro */}
			{/* <Route path="/auth/*" element={<AuthRoutes />}></Route> */}

			{/* Ruta para Journal App  */}
			{/* <Route path="/*" element={<JournalRoutes />}></Route> */}
		</Routes>
	);
};
