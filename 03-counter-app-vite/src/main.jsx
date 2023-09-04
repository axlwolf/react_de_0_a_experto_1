import React from "react";
import ReactDOM from "react-dom/client";
// import HelloWorldApp from "./HelloWorldApp";
import FirstApp from "./FirstApp";
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
		<FirstApp title="Axel Lanuza Rojas" subTitle={4563} />
	</React.StrictMode>
);
