const { response } = require("express");
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
	const events = await Event.find().populate("user", "name");

	res.json({
		ok: true,
		events,
	});
};

const createEvent = async (req, res = response) => {
	const event = new Event(req.body);
	console.log(event);

	try {
		event.user = req.uid;
		const savedEvent = await event.save();

		res.json({
			ok: true,
			event: savedEvent,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Please talk with your administrator",
		});
	}
};

const updateEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);
		console.log(event);
		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: "Event not found",
			});
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: "You don't have privileges to edit this event",
			});
		}

		const newEvent = {
			...req.body,
			user: uid,
		};

		const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
			new: true,
		});

		res.json({
			ok: true,
			event: updatedEvent,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Please talk with your administrator",
		});
	}
};

const deleteEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);

		console.log(event);

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: "Event not found",
			});
		}

		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: "You don't have privileges to delete this event",
			});
		}

		await Event.findOneAndDelete(uid);

		res.json({
			ok: true,
			msg: "Event deleted successfully",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Please talk with your administrator",
		});
	}
};

module.exports = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
};
