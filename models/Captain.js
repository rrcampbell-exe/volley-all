const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Captain extends Player {}

Captain.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "captain",
  }
);

module.exports = Captain;
