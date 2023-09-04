import PropTypes from "prop-types";
const message = {
	message: "Hola mundo",
	title: "Axel",
};

const getTitle = (title) => <span>{title}</span>;

function FirstApp({ title, subTitle = 5, name }) {
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
			<p>Desarrollador: {name}</p>
		</>
	);
}
// Proptypes
FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number,
};
// Defauls props
FirstApp.defaultProps = {
	title: "No Title",
	subTitle: 0,
	name: "Axel Lanuza",
};

export default FirstApp;
