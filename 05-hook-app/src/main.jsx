import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
} from "react-router-dom";
import "./index.css";
// import FormWithCurtomHook from "./02-useEffect/FormWithCurtomHook";
// import HooksApp from "./HooksApp";
// import ConterApp from "./01-useState/CounterApp";
// import CounterWithCoustomHook from "./01-useState/CounterWithCoustomHook";
// import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
// import FocusScreen from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import Memorize from "./06-memos/Memorize";
// import MemoHook from "./06-memos/MemoHook";
// import CallbackHook from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { TodoApp } from "./08-useReducer/TodoApp";
import MainApp from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{/* <React.StrictMode> */}
		<MainApp />
		{/* </React.StrictMode> */}
	</BrowserRouter>
);
