import Sequelize from "sequelize";
import "dotenv/config";

export const connection = new Sequelize(
  process.env.DB_BASE, // DataBase
  process.env.DB_USER, // User
  process.env.DB_PASS, // Password
  // process.env.DB_URL,
  {
    host: process.env.DB_LOCAL, //URL do meu dados
    port: 5432, //Porta que está o banco de dados
    dialect: "postgres", //Qual banco de dados o Sequelize está trabalhando
  }
  // {
  //   dialect: "postgres",
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false,
  //     },
  //   },
  // }
);
