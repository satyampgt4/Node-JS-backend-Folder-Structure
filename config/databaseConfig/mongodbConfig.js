// Load environment variables from a .env file
require('dotenv').config();

// Export an object with configuration parameters for MongoDB using Mongoose
module.exports = {
    // MongoDB connection string
    mongodbUri: process.env.MONGODB_URI,

    // Mongoose connection options
    options: {
        // Options to use new URL parser and remove deprecated options
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Mongoose connection pool options
        poolSize: 10,
        // Mongoose options to handle index build retries
        autoIndex: true,
        // Mongoose options to automatically reconnect if the connection is lost
        autoReconnect: true
    }
};
