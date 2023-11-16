/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import {
	signInWithGoogle,
	loginWithEmail,
	logoutFirebase,
} from "../../../src/firebase/providers";
import {
	checkingAuthentication,
	checkingCredentials,
	login,
	logout,
	startGoogleSignIn,
	startLogOut,
	startLoginWithEmail,
} from "../../../src/store/auth";
import { clearNotesOnLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("tests on auth/thunks", () => {
	const dispatch = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("should invoke checkingCredentials", async () => {
		await checkingAuthentication()(dispatch);
		// const value = checkingCredentials();
		// console.log(value);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
	});

	test("should startGoogleSignIn call checkingCredentials and the login process when success", async () => {
		const loginData = { ok: true, ...demoUser };

		await signInWithGoogle.mockResolvedValue(loginData);

		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test("should startGoogleSignIn call checkingCredentials and the logout process whith error message", async () => {
		const loginData = {
			errorMessage: "there was an error on google logout",
		};

		await signInWithGoogle.mockResolvedValue(loginData);

		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
	});

	test("should startLoginWithEmail call checkingCredentials and the login process when success", async () => {
		const loginData = { ok: true, ...demoUser };
		const formData = { email: demoUser.email, password: "123456789" };

		await loginWithEmail.mockResolvedValue(loginData);
		await startLoginWithEmail(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test("should startLogOut call logoutFirebase, clearNotes and logout", async () => {
		await startLogOut()(dispatch);

		expect(logoutFirebase).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledWith(clearNotesOnLogout());
		expect(dispatch).toHaveBeenCalledWith(logout({}));
	});
});
