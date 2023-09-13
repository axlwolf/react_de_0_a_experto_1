/* eslint-disable react/prop-types */
export const Quote = ({ sentence, character }) => {
	return (
		<blockquote className="blockquote text-end">
			<p className="mb-1">{sentence}</p>
			<footer className="blockquote-footer">{character?.name}</footer>
		</blockquote>
	);
};