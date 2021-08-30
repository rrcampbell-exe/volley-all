const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our Player model
class Player extends User {};

Player.init(
        {id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'player'
          }
    )
    

module.exports = Player;