import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import FormWithCurtomHook from "./02-useEffect/FormWithCurtomHook";
// import HooksApp from "./HooksApp";
// import ConterApp from "./01-useState/CounterApp";
// import CounterWithCoustomHook from "./01-useState/CounterWithCoustomHook";
// import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
// import FocusScreen from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import Memorize from "./06-memos/Memorize";
import MemoHook from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<MemoHook />
	// </React.StrictMode>
);
