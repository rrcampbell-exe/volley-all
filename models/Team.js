const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
// create our Team model
class Team extends Model {}

Team.init(
  {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "team",
  }
);

module.exports = Team;
