import React from "react";
import ReactDOM from "react-dom/client";
// import HelloWorldApp from "./HelloWorldApp";
// import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";

import "./style.css";

// function App() {
// 	return (
// 		<div>
// 			<h1>Hola mundo!!!</h1>
// 		</div>
// 	);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Main;

root.render(
	<React.StrictMode>
		<CounterApp value={100} />
	</React.StrictMode>
);
