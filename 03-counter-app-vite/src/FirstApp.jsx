import PropTypes from "prop-types";
const message = {
	message: "Hola mundo",
	title: "Axel",
};

const getTitle = (title) => <span>{title}</span>;

function FirstApp({ title, subTitle = 5 }) {
	// if (!title) {
	// 	throw new Error("Title is required");
	// }

	return (
		<>
			<h1>Hello First App</h1>
			<h2>{message.title}</h2>
			<p>{getTitle("Esto es un valor de una funcion que regresa un valor")}</p>
			<p>{title}</p>
			<p>{Number(subTitle) + 1}</p>
		</>
	);
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number,
};

export default FirstApp;
