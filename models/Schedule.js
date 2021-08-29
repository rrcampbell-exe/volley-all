const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Team model
class Schedule extends Model {};

Schedule.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    date: {
        type: DataTypes.INTEGER
      }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'schedule'
  }
);

module.exports = Schedule;