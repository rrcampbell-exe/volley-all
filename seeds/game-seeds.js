const { game } = require('../models');

const gameData = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedgames = () => game.bulkCreate(gamedata);
module.exports = seedgames;