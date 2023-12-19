const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CON, {});
		console.log("DB online");
	} catch (error) {
		console.log(error);
		throw new Error("Couldn't connect to Mongo");
	}
};

module.exports = {
	dbConnection,
};
