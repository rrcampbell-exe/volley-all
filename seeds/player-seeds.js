const { Player } = require('../models');

const playerData = [
    {
        first_name: 'Liam',
        last_name: 'Smith',
        email: 'liam@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'James',
        last_name: 'Johnson',
        email: 'james@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Robert',
        last_name: 'Williams',
        email: 'robert@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'John',
        last_name: 'Brown',
        email: 'john@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Michael',
        last_name: 'Jones',
        email: 'michael@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'William',
        last_name: 'Garcia',
        email: 'william@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'David',
        last_name: 'Miller',
        email: 'david@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Richard',
        last_name: 'Davis',
        email: 'richard@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Joseph',
        last_name: 'Rodriguez',
        email: 'joseph@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Thomas',
        last_name: 'Martinez',
        email: 'thomas@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Charles',
        last_name: 'Hernandez',
        email: 'charles@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Christopher',
        last_name: 'Lopez',
        email: 'christopher@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Daniel',
        last_name: 'Gonzales',
        email: 'danielm@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Matthew',
        last_name: 'Wilson',
        email: 'matthew@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Anthony',
        last_name: 'Anderson',
        email: 'anthonym@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Mark',
        last_name: 'Thomas',
        email: 'mark@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Donald',
        last_name: 'Taylor',
        email: 'donald@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Steven',
        last_name: 'Moore',
        email: 'steven@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Paul',
        last_name: 'Ludwig',
        email: 'paul@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Andrew',
        last_name: 'Jackson',
        email: 'andrew@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Joshua',
        last_name: 'Martin',
        email: 'joshua@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Kevin',
        last_name: 'Lee',
        email: 'kevin@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Brian',
        last_name: 'Perez',
        email: 'brian@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'George',
        last_name: 'Thompson',
        email: 'george@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Edward',
        last_name: 'White',
        email: 'edward@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Ronald',
        last_name: 'Harris',
        email: 'ronald@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Jeremy',
        last_name: 'Sanchez',
        email: 'jeremy@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Timothy',
        last_name: 'Clark',
        email: 'timothy@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Jason',
        last_name: 'Ramirez',
        email: 'jasonm@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Noah',
        last_name: 'Lewis',
        email: 'noah@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Ryan',
        last_name: 'Robinson',
        email: 'ryan@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Jacob',
        last_name: 'Walker',
        email: 'jacob@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Gary',
        last_name: 'Young',
        email: 'gary@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Eric',
        last_name: 'Allen',
        email: 'eric@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Jonathan',
        last_name: 'King',
        email: 'jonathan@gmail.com',
        password: 'pswd12345'
    },


    {
        first_name: 'Larry',
        last_name: 'Wright',
        email: 'larry@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Justin',
        last_name: 'Scott',
        email: 'justin@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Brandon',
        last_name: 'Torres',
        email: 'brandon@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Benjamin',
        last_name: 'Hill',
        email: 'benjamin@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Samuel',
        last_name: 'Flores',
        email: 'samuel@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Frank',
        last_name: 'Green',
        email: 'frank@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Jack',
        last_name: 'Adams',
        email: 'jack@gmail.com',
        password: 'pswd12345'
    },
    {
        first_name: 'Jerry',
        last_name: 'Baker',
        email: 'jerry@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Tyler',
        last_name: 'Nelson',
        email: 'tyler@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Aaron',
        last_name: 'Rivera',
        email: 'aaron@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Jose',
        last_name: 'Campbell',
        email: 'jose@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Adam',
        last_name: 'Carter',
        email: 'adam@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Henry',
        last_name: 'Roberts',
        email: 'henry@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Kyle',
        last_name: 'Gomez',
        email: 'kyle@gmail.com',
        password: 'pswd12345'
    },

    {
        first_name: 'Ethan',
        last_name: 'Evans',
        email: 'ethan@gmail.com',
        password: 'pswd12345'
    },

    
];

const seedPlayers = () => Player.bulkCreate(playerData);
module.exports = seedPlayers;