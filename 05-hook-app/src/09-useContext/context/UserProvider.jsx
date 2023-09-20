import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
// 	id: 123456,
// 	name: "Axel",
// 	email: "axlwolf@gmail.com",
// };

/* eslint-disable react/prop-types */
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
