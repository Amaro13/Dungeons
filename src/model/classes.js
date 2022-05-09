import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const classes = connection.define(
  "classes",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hit_die: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    primary_ability: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    saves: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iframe: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

// For render deploy
const initTable = async () => {
  await classes.sync();
};

initTable();
