export const getEnvironments = () => {
	import.meta.env;
	//console.log(import.meta.env);

	return {
		...import.meta.env,
	};
};
