const { Player } = require('../models');

const playerdata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedPlayers = () => Player.bulkCreate(playerdata);
module.exports = seedPlayers;