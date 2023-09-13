import { useState } from "react";
import { useEffect } from "react";

const Message = () => {
	const [cords, setCords] = useState({ x: 0, y: 0 });
	useEffect(() => {
		// console.log("Use Effect called");
		// console.log("Message mounted");
		const onMouseMove = ({ x, y }) => {
			//const cords = { x, y };

			setCords({ x, y });
		};
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			// console.log("Message unmounted");
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
			<p>{JSON.stringify(cords)}</p>
		</>
	);
};

export default Message;
