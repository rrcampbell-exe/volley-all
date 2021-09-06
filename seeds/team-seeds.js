const { Team } = require('../models');

const teamData = [
    {
        team_name: 'Sets on the Beach',
        code: '1111',
        wins: '10',
        losses: '2',
    },

    {
        team_name: 'Setting Ducks',
        code: '2222',
        wins: '7',
        losses: '5',
    },

    {
        team_name: 'Ball Busters',
        code: '3333',
        wins: '9',
        losses: '3',
    },

    {
        team_name: 'Way Out',
        code: '4444',
        wins: '6',
        losses: '6',
    },

    {
        team_name: 'The Empire Spikes Back',
        code: '5555',
        wins: '4',
        losses: '8',
    },

    {
        team_name: 'Safe Sets',
        code: '6666',
        wins: '1',
        losses: '11',
    },

    {
        team_name: 'We Showed Up',
        code: '7777',
        wins: '0',
        losses: '12',
    },

    {
        team_name: 'Spiked Punch',
        code: '8888',
        wins: '12',
        losses: '0',
    }

];

const seedTeams = () => Team.bulkCreate(teamData);
module.exports = seedTeams;