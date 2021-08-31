const { Admin } = require('../models');

const adminData = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedAdmins = () => Admin.bulkCreate(admindata);
module.exports = seedAdmins;