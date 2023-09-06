import PropTypes from "prop-types";

function FirstApp({ title, subTitle, name }) {
	return (
		<>
			<h1 data-testid="test-title"> {title} </h1>
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
}
// Proptypes
FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	name: PropTypes.string,
};
// Defauls props
FirstApp.defaultProps = {
	//title: "No Title",
	subTitle: "No hay subtitle",
	name: "Berenice Lanuza",
};

export default FirstApp;
