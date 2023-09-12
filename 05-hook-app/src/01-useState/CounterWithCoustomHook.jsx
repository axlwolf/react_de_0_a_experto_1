import { useCounter } from "../hooks/useCounter";

const CounterWithCoustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter();

	return (
		<>
			<h1>Counter with hook: {counter}</h1>
			<hr />
			<button className="btn btn-success" onClick={() => decrement(2)}>
				-1
			</button>
			<button className="btn btn-danger" onClick={reset}>
				reset
			</button>
			<button className="btn btn-primary" onClick={() => increment(2)}>
				+1
			</button>
		</>
	);
};

export default CounterWithCoustomHook;
