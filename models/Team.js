const { Model, DataTypes } = require("sequelize");
const { v4 :uuidv4 } = require('uuid')

const sequelize = require("../config/connection");
// create our Team model
class Team extends Model {}

Team.init(
  {
    team_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    team_name: {
      type: DataTypes.STRING,
      primaryKey: true,
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
      defaultValue: 0,
      get() {
        let points
        const rawValue = this.getDataValue(points);
        return rawValue ? (this.wins * 3) : 0
      }
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
