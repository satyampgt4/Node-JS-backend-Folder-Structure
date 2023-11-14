// Importing sql database configuration from sqlConfig.js
const sqlConfig = require("../../config/databaseConfig/sqlConfig");

// Importing Sequelize library
const Sequelize = require("sequelize");

// Creating a new Sequelize instance
const sequelize = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, sqlConfig.options);

// Importing all  models and initializing them with Sequelize
const sql = require("../api/models/model.index")(sequelize, Sequelize);

// Synchronizing the Sequelize ORM database
sequelize.sync()
  .then(() => {
   console.log("Synced db.");
  })
  .catch((err) => {
   console.log("Failed to sync db: " + err.message);
  });

// Assigning Sequelize instance and Sequelize library to the sql object
sql.Sequelize = Sequelize;
sql.sequelize = sequelize;

// Exporting the sql object
module.exports = sql;


