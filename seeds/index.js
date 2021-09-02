const seedUsers = require('./user-seeds')
const seedGames = require('./game-seeds')
const seedTeams = require('./team-seeds')


const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------SEEDING BEGINS--------');

    console.log('------SEEDING TEAMS--------');
    await seedTeams();
    
    console.log('------SEEDING USERS--------');
    await seedUsers();
  
    console.log('------SEEDING GAMES--------');
    await seedGames();

    process.exit(0);
  };
  
  seedAll();