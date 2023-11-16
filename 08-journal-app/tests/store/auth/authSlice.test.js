/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import {
	authSlice,
	checkingCredentials,
	login,
	logout,
} from "../../../src/store/auth/authSlice";
import {
	authenticatedState,
	demoUser,
	initialState,
} from "../../fixtures/authFixtures";

describe("tests on authSlice", () => {
	test("should return the initial state and to be called 'auth'", () => {
		//console.log(authSlice);
		const state = authSlice.reducer(initialState, {});
		//console.log(state);

		expect(authSlice.name).toBe("auth");
		expect(state).toEqual(initialState);
	});

	test("should perform the authentication", () => {
		//console.log();
		const state = authSlice.reducer(initialState, login(demoUser));

		expect(state).toEqual({
			status: "authenticated", // checking, not-authenticated, authenticated
			uid: demoUser.uid, //
			email: demoUser.email, //
			displayName: demoUser.displayName, //
			photoURL: demoUser.photoURL, //
			errorMessage: null,
		});
	});

	test("should perform the logout without arguments", () => {
		const state = authSlice.reducer(authenticatedState, logout());
		//console.log(state);
		expect(state).toEqual({
			status: "not-authenticated", // checking, not-authenticated, authenticated
			uid: null,
			email: null,
			displayName: null,
			photoURL: null,
			errorMessage: undefined,
		});
	});

	test("should perform the logout and show an error message", () => {
		const errorMessage = "Credentials are not correct";
		const state = authSlice.reducer(
			authenticatedState,
			logout({ errorMessage })
		);
		//console.log(state);
		expect(state).toEqual({
			status: "not-authenticated", // checking, not-authenticated, authenticated
			uid: null,
			email: null,
			displayName: null,
			photoURL: null,
			errorMessage: errorMessage,
		});
	});

	test('should change the status to "checking"', () => {
		const state = authSlice.reducer(authenticatedState, checkingCredentials());

		console.log(state);

		expect(state.status).toBe("checking");
	});
});
