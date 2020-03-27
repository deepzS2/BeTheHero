const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

// CORS
app.use(cors());

// JSON
app.use(express.json());

// Routes
app.use(routes);

// Errors
app.use(errors());

module.exports = app;
