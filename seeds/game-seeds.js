const { Game } = require("../models");

//we need 1 team play with all other and teams, and we need this for each team ?
const gameData = [
  {
    date: "2021-09-01",
    time: 6,
    home_team: 'Sets on the Beach',
    away_team: 'Setting Ducks',
  },

  {
    date: "2021-09-01",
    time: 7,
    home_team: 'Ball Busters',
    away_team: 'Way Out',
  },

  {
    date: "2021-09-01",
    time: 8,
    home_team: 'The Empire Spikes Back',
    away_team: 'Safe Sets',
  },

  {
    date: "2021-09-01",
    time: 9,
    home_team: 'We Showed Up',
    away_team: 'Spiked Punch',
  },

  {
    date: "2021-09-08",
    time: 6,
    home_team: 'Way Out',
    away_team: 'The Empire Spikes Back',
  },

  {
    date: "2021-09-08",
    time: 7,
    home_team: 'Safe Sets',
    away_team: 'Ball Busters',
  },

  {
    date: "2021-09-08",
    time: 8,
    home_team: 'Setting Ducks',
    away_team: 'We Showed Up',
  },

  {
    date: "2021-09-08",
    time: 9,
    home_team: 'Spiked Punch',
    away_team: 'Sets on the Beach',
  },
];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;
