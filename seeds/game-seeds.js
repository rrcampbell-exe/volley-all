const { game } = require('../models');


//we need 1 team play with all other and teams, and we need this for each team ?
const gameData = [
    {
        date: '2021-08-15',
        time: 6,
        home_team: 1, //team id
        away_team: 2, // team id
    },

    {
        //insert data
    },


];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;