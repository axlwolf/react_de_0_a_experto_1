const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generatesJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		let usr = await User.findOne({ email: email });

		if (usr) {
			return res.status(400).json({
				ok: false,
				msg: "Email already exists",
			});
		}

		usr = new User(req.body);

		// Encryp the password
		const salt = bcrypt.genSaltSync();
		usr.password = bcrypt.hashSync(password, salt);

		await usr.save();

		const token = await generatesJWT(usr.id, usr.name);

		res.status(201).json({
			ok: true,
			uid: usr.id,
			name: usr.name,
			token,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Please talk with your administrator",
		});
	}
};

const loginUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		const usr = await User.findOne({ email: email });

		if (!usr) {
			return res.status(400).json({
				ok: false,
				msg: "User with that Email does not exists",
			});
		}

		//Confirm user

		const validPassword = bcrypt.compareSync(password, usr.password);

		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: "Incorrect password",
			});
		}

		// Generate JWT token
		const token = await generatesJWT(usr.id, usr.name);

		res.status(201).json({
			ok: true,
			uid: usr.id,
			name: usr.name,
			token,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Please talk with your administrator",
		});
	}
};

const revalidateToken = async (req, res = response) => {
	const { uid, name } = req;

	// generate a new  JWT  and return it on this request
	const token = await generatesJWT(uid, name);

	res.json({
		ok: true,
		token,
	});
};

module.exports = {
	createUser,
	loginUser,
	revalidateToken,
};
