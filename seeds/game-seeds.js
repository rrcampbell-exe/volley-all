const { Game } = require("../models");

//we need 1 team play with all other and teams, and we need this for each team ?
const gameData = [
  {
    date: "2021-09-01",
    time: 6,
    home_team: 1,
    away_team: 2,
  },

  {
    date: "2021-09-01",
    time: 7,
    home_team: 3,
    away_team: 4,
  },

  {
    date: "2021-09-01",
    time: 8,
    home_team: 5,
    away_team: 6,
  },

  {
    date: "2021-09-01",
    time: 9,
    home_team: 7,
    away_team: 8,
  },

  {
    date: "2021-09-08",
    time: 6,
    home_team: 4,
    away_team: 5,
  },

  {
    date: "2021-09-08",
    time: 7,
    home_team: 3,
    away_team: 6,
  },

  {
    date: "2021-09-08",
    time: 8,
    home_team: 2,
    away_team: 7,
  },

  {
    date: "2021-09-08",
    time: 9,
    home_team: 1,
    away_team: 8,
  },
];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;
