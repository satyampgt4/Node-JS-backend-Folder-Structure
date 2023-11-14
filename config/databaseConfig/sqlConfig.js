// Load environment variables from a .env file
require('dotenv').config();

// Export an object with configuration parameters for the database
module.exports = {
    // The name of the database
    database: process.env.DB_DATABASE,
    // The username to connect to the database
    user: process.env.DB_USER,
    // The password to connect to the database
    password: process.env.DB_PASSWORD,

    // Sequelize ORM configuration options
    options: {
        // The hostname of the database server
        host: process.env.DB_HOST,
        // The dialect to use when connecting to the database (in this case, MySQL)
        dialect: process.env.DB_DIALECT,
        // Connection pool options to control the maximum number of connections and how long to keep idle connections open
        pool: {
            // The maximum number of connections in the pool
            max: 5,
            // The minimum number of connections to keep in the pool
            min: 0,
            // The maximum time, in milliseconds, that a connection can be idle before being released
            acquire: 30000,
            // The maximum time, in milliseconds, that a connection can be idle before being closed
            idle: 10000
        }
    }
};
