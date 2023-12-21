/*
    User Routes / Events
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/field-validator");
const {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
} = require("../controllers/events");

const router = Router();

// All this routes need to be validated with the JWT token
router.use(validateJWT);

// Get events
router.get("/", getEvents);

// Create new event
router.post(
	"/",
	[
		check("title", "title is required").not().isEmpty(),
		check("start", "start date is required").custom(isDate),
		check("end", "end date is required").custom(isDate),
		validateFields,
	],
	createEvent
);

// Update event
router.put("/:id", updateEvent);

// Delete event
router.delete("/:id", deleteEvent);

module.exports = router;
