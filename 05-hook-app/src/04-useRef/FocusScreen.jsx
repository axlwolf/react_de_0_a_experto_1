import { useRef } from "react";

const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h1>Focus screen</h1>
			<hr />
			<input
				ref={inputRef}
				type="text"
				className="form-control"
				placeholder="Ingresa tu nombre"
			/>

			<button className="btn btn-primary mt-4" onClick={handleClick}>
				Set Focus
			</button>
		</>
	);
};

export default FocusScreen;
