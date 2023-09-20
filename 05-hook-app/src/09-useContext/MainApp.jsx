import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage } from "./pages/";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";

const MainApp = () => {
	return (
		<UserProvider>
			<Navbar />
			<hr />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="login" element={<LoginPage />} />

				{/* <Route path="/*" element={<LoginPage />} /> */}
				<Route path="/*" element={<Navigate to="login" />} />
			</Routes>
		</UserProvider>
	);
};

export default MainApp;
