const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Game extends Model {}

// consider adding is_Home designation to these where "opponent" is the relationship between is_Home

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
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "team_id",
      },
    },
    away_team: {
      type: DataTypes.INTEGER,
      references: {
        model: "team",
        key: "team_id",
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
