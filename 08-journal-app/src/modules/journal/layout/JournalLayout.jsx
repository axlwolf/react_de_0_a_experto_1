/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;
Toolbar;
export const JournalLayout = ({ children }) => {
	return (
		<Box
			sx={{ display: "flex" }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			{/* Navbar */}
			<NavBar drawerWidth={drawerWidth} />
			{/* Sidebar or Drawer */}
			<SideBar drawerWidth={drawerWidth}></SideBar>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				<Toolbar></Toolbar>
				{children}
			</Box>
		</Box>
	);
};
