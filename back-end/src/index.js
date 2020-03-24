const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// CORS
app.use(cors());

// JSON
app.use(express.json());

// Routes
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
