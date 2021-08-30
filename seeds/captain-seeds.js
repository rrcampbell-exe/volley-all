const { Captain } = require('../models');

const captaindata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedCaptains = () => Captain.bulkCreate(captaindata);
module.exports = seedCaptains;