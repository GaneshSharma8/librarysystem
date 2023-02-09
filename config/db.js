const { Sequelize } = require("sequelize");

// connection to database
module.exports = new Sequelize("library", "postgres", "ganesh", {
  host: "localhost",
  dialect: "postgres",
});