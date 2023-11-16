/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import {
	addNewEmptyNote,
	savingNewNote,
	setActiveNote,
} from "../../../src/store/journal";
import { startNewNote } from "../../../src/store/journal/thunks";
import "whatwg-fetch"; // <-- yarn add whatwg-fetch
import { FirebaseDB } from "../../../src/firebase/config";

describe("tests on journal/thunks", () => {
	const dispatch = jest.fn();
	const getState = jest.fn();

	beforeEach(() => jest.clearAllMocks());
	test("should startNewNote create a blank new note", async () => {
		const testUID = "TEST_UID";

		getState.mockReturnValue({ auth: { uid: testUID } });
		await startNewNote()(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith(savingNewNote());
		expect(dispatch).toHaveBeenCalledWith(
			addNewEmptyNote({
				body: "",
				title: "",
				id: expect.any(String),
				date: expect.any(Number),
			})
		);

		expect(dispatch).toHaveBeenCalledWith(
			setActiveNote({
				body: "",
				title: "",
				id: expect.any(String),
				date: expect.any(Number),
			})
		);

		const collectionRef = collection(FirebaseDB, `${testUID}/journal/notes`);
		const docs = await getDocs(collectionRef);
		//console.log(docs);

		const deletePromises = [];

		docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

		await Promise.all(deletePromises);
	});
});
