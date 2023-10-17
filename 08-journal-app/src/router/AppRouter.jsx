import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { JournalRoutes } from "../modules/journal/routes/JournalRoutes";

export const AppRouter = () => {
	return (
		<Routes>
			{/* Ruta para Login y registro */}
			<Route path="/auth/*" element={<AuthRoutes />}></Route>

			{/* Ruta para Journal App  */}
			<Route path="/*" element={<JournalRoutes />}></Route>
		</Routes>
	);
};
