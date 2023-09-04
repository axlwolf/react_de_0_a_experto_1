import PropTypes from "prop-types";
import React, { useState } from "react";

function CounterApp({ value }) {
	const [counter, setCounter] = useState(value);

	const hanldeClick = (e) => {
		console.log(e);
		//setCounter(counter + 1);
		setCounter((c) => c + 1);
	};

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			<button onClick={hanldeClick}>+1</button>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

export default CounterApp;
