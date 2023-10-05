import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../modules/auth/";

import { HeroesRoutes } from "../modules/heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path="login/*"
					element={
						<PublicRoute>
							{/* <LoginPage /> */}
							<Routes>
								<Route path="/*" element={<LoginPage />}></Route>
							</Routes>
						</PublicRoute>
					}
				></Route>

				<Route
					path="/*"
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				></Route>

				{/* <Route path="login" element={<LoginPage />}></Route> */}
				{/* <Route path="/*" element={<HeroesRoutes />}></Route> */}
			</Routes>
		</>
	);
};
