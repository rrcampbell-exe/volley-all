const { User } = require('../models');

const userData = [
    {
        first_name: 'Liam',
        last_name: 'Smith',
        email: 'liam@gmail.com',
        password: 'pswd12345',
        team_id: 1,
    },

    {
        first_name: 'Emily',
        last_name: 'Johnson',
        email: 'emily@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'Robert',
        last_name: 'Samuels',
        email: 'robert@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'Hannah',
        last_name: 'Brown',
        email: 'hannah@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'Michael',
        last_name: 'Jones',
        email: 'michael@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'Samantha',
        last_name: 'Garcia',
        email: 'samantha@gmail.com',
        password: 'pswd12345',
        team_id: 1
    },

    {
        first_name: 'David',
        last_name: 'Miller',
        email: 'david@gmail.com',
        password: 'pswd12345',
        team_id: 2
    },

    {
        first_name: 'Sarah',
        last_name: 'Davis',
        email: 'sarah@gmail.com',
        password: 'pswd12345',
        team_id: 2
    },

    {
        first_name: 'Joseph',
        last_name: 'Rodriguez',
        email: 'joseph@gmail.com',
        password: 'pswd12345',
        team_id: 2
    },


    {
        first_name: 'Ashley',
        last_name: 'Martinez',
        email: 'ashley@gmail.com',
        password: 'pswd12345',
        team_id: 2
    },


    {
        first_name: 'Charles',
        last_name: 'Hernandez',
        email: 'charles@gmail.com',
        password: 'pswd12345',
        team_id: 2
    },

    {
        first_name: 'Alexis',
        last_name: 'Lopez',
        email: 'alexis@gmail.com',
        password: 'pswd12345',
        team_id: 2,

    },

    {
        first_name: 'Daniel',
        last_name: 'Gonzales',
        email: 'danielm@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },

    {
        first_name: 'Skylar',
        last_name: 'Wilson',
        email: 'skylar@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },


    {
        first_name: 'Anthony',
        last_name: 'Anderson',
        email: 'anthonym@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },

    {
        first_name: 'Jessica',
        last_name: 'Adams',
        email: 'jessica@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },

    {
        first_name: 'Donald',
        last_name: 'Taylor',
        email: 'donald@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },

    {
        first_name: 'Madison',
        last_name: 'Moore',
        email: 'madison@gmail.com',
        password: 'pswd12345',
        team_id: 3
    },

    {
        first_name: 'Paul',
        last_name: 'Ludwig',
        email: 'paul@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Elizabeth',
        last_name: 'Jackson',
        email: 'elizabeth@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Joshua',
        last_name: 'Martin',
        email: 'joshua@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Alyssa',
        last_name: 'Lee',
        email: 'alyssa@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Brian',
        last_name: 'Perez',
        email: 'brian@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Kayla',
        last_name: 'Thompson',
        email: 'kayla@gmail.com',
        password: 'pswd12345',
        team_id: 4
    },

    {
        first_name: 'Edward',
        last_name: 'White',
        email: 'edward@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },

    {
        first_name: 'Megan',
        last_name: 'Harris',
        email: 'megan@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },

    {
        first_name: 'Jeremy',
        last_name: 'Sanchez',
        email: 'jeremy@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },

    {
        first_name: 'Lauren',
        last_name: 'Clark',
        email: 'lauren@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },

    {
        first_name: 'Jason',
        last_name: 'Ramirez',
        email: 'jasonm@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },

    {
        first_name: 'Rachel',
        last_name: 'Lewis',
        email: 'rachel@gmail.com',
        password: 'pswd12345',
        team_id: 5
    },


    {
        first_name: 'Ryan',
        last_name: 'Robinson',
        email: 'ryan@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },


    {
        first_name: 'Victoria',
        last_name: 'Walker',
        email: 'victoria@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },

    {
        first_name: 'Gary',
        last_name: 'Young',
        email: 'gary@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },

    {
        first_name: 'Brianna',
        last_name: 'Allen',
        email: 'brianna@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },

    {
        first_name: 'Jonathan',
        last_name: 'King',
        email: 'jonathan@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },


    {
        first_name: 'Abigail',
        last_name: 'Wright',
        email: 'abigail@gmail.com',
        password: 'pswd12345',
        team_id: 6
    },

    {
        first_name: 'Justin',
        last_name: 'Scott',
        email: 'justin@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },

    {
        first_name: 'Amanda',
        last_name: 'Torres',
        email: 'amanda@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },

    {
        first_name: 'Benjamin',
        last_name: 'Hill',
        email: 'benjamin@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },

    {
        first_name: 'Jennifer',
        last_name: 'Flores',
        email: 'jennifer@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },

    {
        first_name: 'Frank',
        last_name: 'Green',
        email: 'frank@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },

    {
        first_name: 'Olivia',
        last_name: 'Adams',
        email: 'olivia@gmail.com',
        password: 'pswd12345',
        team_id: 7
    },
    {
        first_name: 'Jerry',
        last_name: 'Baker',
        email: 'jerry@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Emma',
        last_name: 'Nelson',
        email: 'emma@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Aaron',
        last_name: 'Rivera',
        email: 'aaron@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Morgan',
        last_name: 'Campbell',
        email: 'morgan@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Adam',
        last_name: 'Carter',
        email: 'adam@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Nicole',
        last_name: 'Roberts',
        email: 'nicole@gmail.com',
        password: 'pswd12345',
        team_id: 8
    },

    {
        first_name: 'Admin',
        last_name: 'User',
        email: 'admin@gmail.com',
        password: 'pswd12345',
        is_Admin: true,
        team_id: null,
    }

];


const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;