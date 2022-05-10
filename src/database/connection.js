import Sequelize from "sequelize";
import "dotenv/config";

export const connection = new Sequelize(
  // process.env.DB_BASE, // DataBase
  // process.env.DB_USER, // User
  // process.env.DB_PASS, // Password

  // {
  //   host: process.env.DB_LOCAL, //URL do meu dados
  //   port: 5432, //
  //   dialect: "postgres", //
  // },

  // for render deploy
  process.env.DB_URL,

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
