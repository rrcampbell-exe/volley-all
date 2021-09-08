const { User } = require('../models');

const userData = [
    {
        first_name: 'Liam',
        last_name: 'Smith',
        email: 'liam@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'Emily',
        last_name: 'Johnson',
        email: 'emily@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'Robert',
        last_name: 'Samuels',
        email: 'robert@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'Hannah',
        last_name: 'Brown',
        email: 'hannah@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'Michael',
        last_name: 'Jones',
        email: 'michael@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'Samantha',
        last_name: 'Garcia',
        email: 'samantha@gmail.com',
        password: 'pswd12345',
        team_id: 1,
        team_name: 'Sets on the Beach'
    },

    {
        first_name: 'David',
        last_name: 'Miller',
        email: 'david@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },

    {
        first_name: 'Sarah',
        last_name: 'Davis',
        email: 'sarah@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },

    {
        first_name: 'Joseph',
        last_name: 'Rodriguez',
        email: 'joseph@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },


    {
        first_name: 'Ashley',
        last_name: 'Martinez',
        email: 'ashley@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },


    {
        first_name: 'Charles',
        last_name: 'Hernandez',
        email: 'charles@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },

    {
        first_name: 'Alexis',
        last_name: 'Lopez',
        email: 'alexis@gmail.com',
        password: 'pswd12345',
        team_id: 2,
        team_name: 'Setting Ducks'
    },

    {
        first_name: 'Daniel',
        last_name: 'Gonzales',
        email: 'danielm@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },

    {
        first_name: 'Skylar',
        last_name: 'Wilson',
        email: 'skylar@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },


    {
        first_name: 'Anthony',
        last_name: 'Anderson',
        email: 'anthonym@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },

    {
        first_name: 'Jessica',
        last_name: 'Adams',
        email: 'jessica@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },

    {
        first_name: 'Donald',
        last_name: 'Taylor',
        email: 'donald@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },

    {
        first_name: 'Madison',
        last_name: 'Moore',
        email: 'madison@gmail.com',
        password: 'pswd12345',
        team_id: 3,
        team_name: 'Ball Busters'
    },

    {
        first_name: 'Paul',
        last_name: 'Ludwig',
        email: 'paul@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Elizabeth',
        last_name: 'Jackson',
        email: 'elizabeth@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Joshua',
        last_name: 'Martin',
        email: 'joshua@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Alyssa',
        last_name: 'Lee',
        email: 'alyssa@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Brian',
        last_name: 'Perez',
        email: 'brian@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Kayla',
        last_name: 'Thompson',
        email: 'kayla@gmail.com',
        password: 'pswd12345',
        team_id: 4,
        team_name: 'Way Out'
    },

    {
        first_name: 'Edward',
        last_name: 'White',
        email: 'edward@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },

    {
        first_name: 'Megan',
        last_name: 'Harris',
        email: 'megan@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },

    {
        first_name: 'Jeremy',
        last_name: 'Sanchez',
        email: 'jeremy@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },

    {
        first_name: 'Lauren',
        last_name: 'Clark',
        email: 'lauren@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },

    {
        first_name: 'Jason',
        last_name: 'Ramirez',
        email: 'jason@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },

    {
        first_name: 'Rachel',
        last_name: 'Lewis',
        email: 'rachel@gmail.com',
        password: 'pswd12345',
        team_id: 5,
        team_name: 'The Empire Spikes Back'
    },


    {
        first_name: 'Ryan',
        last_name: 'Robinson',
        email: 'ryan@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },


    {
        first_name: 'Victoria',
        last_name: 'Walker',
        email: 'victoria@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },

    {
        first_name: 'Gary',
        last_name: 'Young',
        email: 'gary@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },

    {
        first_name: 'Brianna',
        last_name: 'Allen',
        email: 'brianna@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },

    {
        first_name: 'Jonathan',
        last_name: 'King',
        email: 'jonathan@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },


    {
        first_name: 'Abigail',
        last_name: 'Wright',
        email: 'abigail@gmail.com',
        password: 'pswd12345',
        team_id: 6,
        team_name: 'Safe Sets'
    },

    {
        first_name: 'Justin',
        last_name: 'Scott',
        email: 'justin@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },

    {
        first_name: 'Amanda',
        last_name: 'Torres',
        email: 'amanda@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },

    {
        first_name: 'Benjamin',
        last_name: 'Hill',
        email: 'benjamin@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },

    {
        first_name: 'Jennifer',
        last_name: 'Flores',
        email: 'jennifer@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },

    {
        first_name: 'Frank',
        last_name: 'Green',
        email: 'frank@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },

    {
        first_name: 'Olivia',
        last_name: 'Adams',
        email: 'olivia@gmail.com',
        password: 'pswd12345',
        team_id: 7,
        team_name: 'We Showed Up'
    },
    {
        first_name: 'Jerry',
        last_name: 'Baker',
        email: 'jerry@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
    },

    {
        first_name: 'Emma',
        last_name: 'Nelson',
        email: 'emma@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
    },

    {
        first_name: 'Aaron',
        last_name: 'Rivera',
        email: 'aaron@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
    },

    {
        first_name: 'Morgan',
        last_name: 'Campbell',
        email: 'morgan@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
    },

    {
        first_name: 'Adam',
        last_name: 'Carter',
        email: 'adam@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
    },

    {
        first_name: 'Nicole',
        last_name: 'Roberts',
        email: 'nicole@gmail.com',
        password: 'pswd12345',
        team_id: 8,
        team_name: 'Spiked Punch'
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