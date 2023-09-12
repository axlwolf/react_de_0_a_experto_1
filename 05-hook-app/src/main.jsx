import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HooksApp from "./HooksApp";
import ConterApp from "./01-useState/CounterApp";
import CounterWithCoustomHook from "./01-useState/CounterWithCoustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CounterWithCoustomHook />
	</React.StrictMode>
);
