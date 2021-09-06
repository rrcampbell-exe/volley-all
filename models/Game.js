const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
      type: DataTypes.STRING,
      references: {
        model: "team",
        key: "team_name",
      },
    },
    away_team: {
      type: DataTypes.STRING,
      references: {
        model: "team",
        key: "team_name",
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
