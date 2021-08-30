const { User } = require('../models');

const userdata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;