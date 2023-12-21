const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

// Create express server instance

const app = express();

// Database
dbConnection();

//CORS
app.use(cors());

// Public directory
app.use(express.static("public"));

// body: Reading and parsing
app.use(express.json());

// Routes
/* TODO: auth: create, login, token renew */
app.use("/api/auth", require("./routes/auth"));

/* TODO: CRUD: Calendar events*/
app.use("/api/events", require("./routes/events"));

// Listen on port
app.listen(process.env.PORT, (err, res) => {
	console.log(`Server running on port ${process.env.PORT}`);
});
