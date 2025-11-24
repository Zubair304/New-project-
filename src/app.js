const express = require("express");
const taskRoutes = require("./routes/taskroutes");

const app = express();

app.use(express.json()); // parse JSON requests
app.use("/tasks", taskRoutes); // use task routes

module.exports = app;
