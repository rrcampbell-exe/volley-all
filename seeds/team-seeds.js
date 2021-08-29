const { Team } = require('../models');

const teamdata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedTeams = () => Team.bulkCreate(teamdata);
module.exports = seedTeams;