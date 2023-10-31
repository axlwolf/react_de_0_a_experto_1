/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
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
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../../hooks";
import { startCraetingUserWithEmail } from "../../../store/auth";

const formData = {
	email: "",
	password: "",
	displayName: "",
};

const formValidations = {
	email: [(value) => value.includes("@"), "Email needs to have an @"],
	password: [
		(value) => value.length >= 6,
		"Password needs to have at least 6 characters",
	],
	displayName: [(value) => value.length > 1, "Full name is required"],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);

	const [formSumbitted, setformSumbitted] = useState(false);
	const {
		formState,
		displayName,
		email,
		password,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
		onInputChange,
	} = useForm(formData, formValidations);

	const onSubmit = (ev) => {
		ev.preventDefault();
		setformSumbitted(true);
		if (!isFormValid) return;

		dispatch(startCraetingUserWithEmail(formState));
	};

	return (
		<AuthLayout title="Create account">
			<form
				onSubmit={onSubmit}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Full Name"
							type="text"
							placeholder="Full Name"
							fullWidth
							name="displayName"
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSumbitted}
							helperText={displayNameValid}
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="email"
							type="email"
							placeholder="mail@google.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSumbitted}
							helperText={emailValid}
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="password"
							type="password"
							placeholder="*****"
							fullWidth
							name="password"
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSumbitted}
							helperText={passwordValid}
						></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} display={!!errorMessage ? "" : "none"}>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>
						<Grid item xs={12}>
							<Button
								disabled={isCheckingAuthentication}
								type="submit"
								sx={{ mt: 2 }}
								variant="contained"
								fullWidth
							>
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
