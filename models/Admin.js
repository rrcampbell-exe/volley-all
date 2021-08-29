const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Team model
class Admin extends User {};

Admin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
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

module.exports = Admin;