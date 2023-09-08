/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length <= 2) return;

		onNewCategory(inputValue.trim());
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit} aria-label="form">
			<input
				type="text"
				placeholder="Find gifs"
				value={inputValue}
				onChange={(e) => handleInputChange(e)}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
