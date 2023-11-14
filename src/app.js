// Importing required modules
const express = require('express');

// Importing the API router and middleware
const router = require('./api/router');
const middleware = require("./middlewares/middleware")

// Creating an instance of the Express application
const app = express();

// Adding the middleware to the application
app.use(middleware);

// Adding the API router to the application
app.use(router);

// Creating a simple GET route
app.get("/", (req, res) => {
  res.json({ msg: "hello how are you" })
})



// Exporting the Express application
module.exports = app;
