import PropTypes from "prop-types";
import React, { useState } from "react";

function CounterApp({ value }) {
	console.log("render");
	const [counter, setCounter] = useState(value);

	const hanldeAdd = (e) => {
		console.log(e);
		//setCounter(counter + 1);
		setCounter((c) => c + 1);
	};

	const handleMinus = (e) => {
		console.log(e);
		//setCounter(counter + 1);
		if (counter === 0) return;
		setCounter((c) => c - 1);
	};

	const handleResetCounter = (e) => {
		console.log(e);
		//setCounter(counter + 1);
		setCounter(value);
	};

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			<button onClick={handleMinus}>- 1</button>
			<button onClick={handleResetCounter}>Reset</button>
			<button onClick={hanldeAdd}>+ 1</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

export default CounterApp;
