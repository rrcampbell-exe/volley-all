const { Schedule } = require('../models');

const scheduledata = [
    {
        //insert data
    },

    {
        //insert data
    },


];

const seedSchedules = () => Schedule.bulkCreate(scheduledata);
module.exports = seedSchedules;