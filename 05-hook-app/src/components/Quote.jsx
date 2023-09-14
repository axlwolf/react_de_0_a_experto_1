import { useLayoutEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
export const Quote = ({ sentence, character }) => {
	const pRef = useRef();

	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		console.log(pRef.current.getBoundingClientRect());
		setBoxSize({
			width: pRef.current.offsetWidth,
			height: pRef.current.offsetHeight,
		});
	}, [sentence]);

	return (
		<>
			<blockquote className="blockquote text-end" style={{ display: "flex" }}>
				<p ref={pRef} className="mb-1">
					{sentence}
				</p>
				<footer className="blockquote-footer">{character?.name}</footer>
			</blockquote>
			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
