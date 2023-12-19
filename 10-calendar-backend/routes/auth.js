/*
    User Routes / Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/field-validator");
const { validateJWT } = require("../middlewares/validate-jwt");

const {
	createUser,
	loginUser,
	revalidateToken,
} = require("../controllers/auth");

const router = Router();

router.post(
	"/new",
	[
		// Middlewares
		check("name", "name is required").not().isEmpty(),
		check("email", "email is required").isEmail(),
		check("password", "password must have 6 characters min").isLength({
			min: 6,
		}),
		validateFields,
	],
	createUser
);

router.post(
	"/",
	[
		// Middlewares
		check("email", "email is required").isEmail(),
		check("password", "password must have 6 characters min").isLength({
			min: 6,
		}),
		validateFields,
	],
	loginUser
);

router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
