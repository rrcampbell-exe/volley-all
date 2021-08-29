const { Admin } = require('../models');

const admindata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedAdmins = () => Admin.bulkCreate(admindata);
module.exports = seedAdmins;