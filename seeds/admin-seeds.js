const { Admin } = require('../models');

const adminData = [
   
    {
        name: 'Billy',
        is_Admin: true,
        email: 'billy@gmail.com',
        password: 'pswd12345'
    }
   
];

const seedAdmins = () => Admin.bulkCreate(adminData);
module.exports = seedAdmins;