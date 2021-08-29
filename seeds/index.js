const seedUsers = require('./user-seeds')
const seedPlayers = require('./player-seeds')
const seedSchedules = require('./schedule-seeds')
const seedTeams = require('./team-seeds')
const seedCaptains = require('./captain-seeds.js')
const seedAdmins = require('./admin-seeds.js')


const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
  
    await seedPlayers();
    console.log('--------------');
  
    await seedSchedules();
    console.log('--------------');
  
    await seedTeams();
    console.log('--------------');
  
    await seedCaptains();
    console.log('--------------');

    await seedAdmins();
    console.log('--------------');


    process.exit(0);
  };
  
  seedAll();