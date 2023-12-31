/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
	Button,
	Grid,
	Link,
	Typography,
	TextField,
	Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../../hooks/";
import {
	checkingAuthentication,
	startGoogleSignIn,
	startLoginWithEmail,
} from "../../../store/auth";

const formData = {
	email: "",
	password: "",
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const { email, password, onInputChange, formState } = useForm(formData);

	const isAuthenticating = useMemo(() => status === "checking", [status]);

	const onSubmit = (ev) => {
		ev.preventDefault();
		// dispatch(checkingAuthentication());
		console.log({ email, password });
		dispatch(startLoginWithEmail({ email, password }));
	};

	const onGoogleSignIn = () => {
		console.log("Google Sign In");
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title="Login">
			<form
				aria-label="submit-form"
				onSubmit={onSubmit}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="email"
							type="email"
							placeholder="mail@google.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="password"
							type="password"
							placeholder="*****"
							fullWidth
							name="password"
							inputProps={{
								"data-testid": "password",
							}}
							value={password}
							onChange={onInputChange}
						></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} display={!!errorMessage ? "" : "none"}>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								type="submit"
								sx={{ mt: 2 }}
								variant="contained"
								fullWidth
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								sx={{ mt: 2 }}
								variant="contained"
								fullWidth
								aria-label="google-btn"
								onClick={onGoogleSignIn}
							>
								<Google></Google>
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Link component={RouterLink} color="inherit" to="/auth/register">
							Create an account
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
