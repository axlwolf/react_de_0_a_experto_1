import { useState } from "react";

const CounterApp = () => {
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = state;

	const handleCounter = () => {
		setCounter({
			...state,
			counter3: counter3 + 1,
		});
	};

	return (
		<>
			<h1>Counter1: {counter1}</h1>
			<h1>Counter2: {counter2}</h1>
			<h1>Counter3: {counter3}</h1>

			<hr />
			<button className="btn btn-success" onClick={handleCounter}>
				+1
			</button>
		</>
	);
};

export default CounterApp;
