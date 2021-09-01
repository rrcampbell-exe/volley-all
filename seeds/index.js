const seedPlayers = require('./player-seeds')
const seedGames = require('./game-seeds')
const seedTeams = require('./team-seeds')
const seedAdmins = require('./admin-seeds.js')


const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedTeams();
    console.log('--------------');
    
    await seedPlayers();
    console.log('--------------');
  
    await seedGames();
    console.log('--------------');

    await seedAdmins();
    console.log('--------------');
    
    process.exit(0);
  };
  
  seedAll();