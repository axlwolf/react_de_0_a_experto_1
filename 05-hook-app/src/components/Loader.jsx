/* eslint-disable react/prop-types */
export const Loader = ({ isLoading }) => {
	if (isLoading)
		return <div className="alert alert-info text-center">Loading...</div>;
};
