const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Team model
class Team extends Model {};

Team.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      wins: {
        type: DataTypes.INTEGER
      },
      ties: {
        type: DataTypes.INTEGER,
      },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team'
  }
);

module.exports = Team;