const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    home_team: {
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "id",
      },
    },
    away_team: {
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
