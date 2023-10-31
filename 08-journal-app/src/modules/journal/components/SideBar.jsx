/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material";
import {
	Grid,
	Drawer,
	Box,
	Toolbar,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {
	const { displayName } = useSelector((state) => state.auth);

	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"].map(
						(month) => (
							<ListItem key={month} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot></TurnedInNot>
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={month}></ListItemText>
										<ListItemText
											secondary={"Lorem ipsum, dolor sit amet consectetur."}
										></ListItemText>
									</Grid>
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
			</Drawer>
		</Box>
	);
};
