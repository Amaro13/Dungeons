import Sequelize from "sequelize";
import "dotenv/config";

export const connection = new Sequelize(
  // process.env.DB_BASE, // DataBase
  // process.env.DB_USER, // User
  // process.env.DB_PASS, // Password
  process.env.DB_URL,
  // {
  //   host: process.env.DB_LOCAL, //URL from the databank
  //   port: 5432, //The database port
  //   dialect: "postgres", //What database is getting worked on
  // },
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = connection;
