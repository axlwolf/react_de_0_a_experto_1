/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../../src/modules/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../../src/store/auth";
import {
	startGoogleSignIn,
	startLoginWithEmail,
} from "../../../../src/store/auth/thunks";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmail = jest.fn();

jest.mock("../../../../src/store/auth/thunks", () => ({
	startGoogleSignIn: () => mockStartGoogleSignIn,
	startLoginWithEmail: ({ email, password }) => {
		return () => mockStartLoginWithEmail({ email, password });
	},
}));

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	preloadedState: {
		auth: notAuthenticatedState,
	},
});

describe("<LoginPage/> tests", () => {
	beforeEach(() => jest.clearAllMocks());

	it("should show the component correctly", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		//screen.debug();
		expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
	});

	it("Google button should call the startGoogleSignIn method", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText("google-btn");

		fireEvent.click(googleBtn);

		expect(mockStartGoogleSignIn).toHaveBeenCalled();
	});

	it("form submit  should call startLoginWithEmail", () => {
		const email = "axlwolf@gmail.com";
		const password = "123456";

		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const emailField = screen.getByRole("textbox", { name: "email" });

		//console.log(emailField);

		fireEvent.change(emailField, { target: { name: "email", value: email } });

		const passwordField = screen.getByTestId("password");
		fireEvent.change(passwordField, {
			target: { name: "password", value: password },
		});

		const loginForm = screen.getByLabelText("submit-form");
		fireEvent.submit(loginForm);

		expect(mockStartLoginWithEmail).toHaveBeenCalledWith({
			email: email,
			password: password,
		});
	});
});
