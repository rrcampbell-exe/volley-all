const { Player } = require('../models');

const playerData = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedPlayers = () => Player.bulkCreate(playerdata);
module.exports = seedPlayers;