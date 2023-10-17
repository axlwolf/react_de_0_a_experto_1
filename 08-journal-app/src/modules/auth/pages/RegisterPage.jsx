import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, Typography, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
	return (
		<AuthLayout title="Create account">
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Full Name"
							type="text"
							placeholder="Full Name"
							fullWidth
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="email"
							type="email"
							placeholder="mail@google.com"
							fullWidth
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="password"
							type="text"
							placeholder="*****"
							fullWidth
						></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12}>
							<Button sx={{ mt: 2 }} variant="contained" fullWidth>
								Create account
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>
							Do you already have an account?
						</Typography>
						<Link component={RouterLink} color="inherit" to="/auth/login">
							Login
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
