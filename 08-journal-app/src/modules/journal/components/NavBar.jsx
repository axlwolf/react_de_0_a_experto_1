/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { AppBar, IconButton, Grid, Toolbar, Typography } from "@mui/material";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { startLogOut } from "../../../store/auth";

export const NavBar = ({ drawerWidth = 240 }) => {
	const dispatch = useDispatch();

	const onLogOut = () => {
		console.log("Logout");
		dispatch(startLogOut());
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined></MenuOutlined>
				</IconButton>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h6" noWrap component="div">
						JournalApp
					</Typography>
					<IconButton color="error" onClick={onLogOut}>
						<LogoutOutlined></LogoutOutlined>
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
