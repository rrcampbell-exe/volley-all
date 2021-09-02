const { Team } = require('../models');

const teamData = [
    {
        team_name: 'Sets on the Beach',
        code: '1111',
        wins: '10',
        losses: '2',
        points: '25'
    },

    {
        team_name: 'Setting Ducks',
        code: '2222',
        wins: '7',
        losses: '5',
        points: '18'
    },

    {
        team_name: 'Ball Busters',
        code: '3333',
        wins: 9,
        losses: '1',
        points: '11'
    },

    {
        team_name: 'Way Out',
        code: '4444',
        wins: '15',
        losses: '5',
        points: '31'
    },

    {
        team_name: 'We Always Get It Up',
        code: '5555',
        wins: '19',
        losses: '3',
        points: '35'
    },

    {
        team_name: 'Safe Sets',
        code: '6666',
        wins: '6',
        losses: '3',
        points: '10'
    },

    {
        team_name: 'We Showed Up',
        code: '7777',
        wins: '17',
        losses: '7',
        points: '24'
    },

    {
        team_name: 'Spiked Punch',
        code: '8888',
        wins: '13',
        losses: '9',
        points: '20'
    }

];

const seedTeams = () => Team.bulkCreate(teamData);
module.exports = seedTeams;