const { parse, isValid, format } = require("date-fns");
const { enGB, tr } = require("date-fns/locale");

const moment = require("moment");

const isDate = (value) => {
	if (!value) return false;
	// const parsedDate = parse(value, "P", new Date(), { locale: enGB });
	// const isValidDate = isValid(parsedDate);
	// const formattedDate = format(parsedDate, "dd-MM-yyyy");
	const date = moment(value);
	console.log({ date });
	// console.log({ parsedDate, isValidDate, formattedDate });

	if (date.isValid()) {
		return true;
	} else return false;
};

module.exports = {
	isDate,
};
