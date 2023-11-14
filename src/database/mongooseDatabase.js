// Importing MongoDB configuration from mongoConfig.js
const mongoConfig = require("../config/mongoConfig");

// Importing Mongoose library
const mongoose = require("mongoose");

// Set up MongoDB connection
mongoose.connect(mongoConfig.mongodbUri, mongoConfig.options);

// Get the default connection
const mongoDb = mongoose.connection;

// Event listener for successful connection
mongoDb.on("connected", () => {
  console.log("MongoDB connected successfully");
});

// Event listener for error
mongoDb.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Exporting Mongoose instance
module.exports = mongoose;
