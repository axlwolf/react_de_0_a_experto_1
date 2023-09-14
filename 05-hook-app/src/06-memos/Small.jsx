/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from "react";

export const Small = memo(({ value }) => {
	console.log("Me volvi a dibujar :(");
	return <small>{value}</small>;
});
