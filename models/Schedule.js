const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Schedule extends Model {}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    team1: {
      type: DataTypes.STRING, // or do we want to do this by team id?
    },
    team2: {
      type: DataTypes.STRING, // or do we want to do this by team id?
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "schedule",
  }
);

module.exports = Schedule;
