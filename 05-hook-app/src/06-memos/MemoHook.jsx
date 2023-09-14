import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
	for (let index = 0; index < iterationNumber; index++) {
		console.log("Here we go again");
	}
	return `${iterationNumber} iterations completed`;
};

const MemoHook = () => {
	const { counter, increment } = useCounter(4000);
	const [show, setShow] = useState(true);

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter <small>{counter}</small>
			</h1>
			<hr />
			<h4>{memorizedValue}</h4>
			<button className="btn btn-primary" onClick={() => increment()}>
				+1
			</button>
			<button
				className="btn btn-outline-primary"
				onClick={() => setShow(!show)}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};

export default MemoHook;
