const router = require('express').Router();

const playerRoutes = require('./player-routes');
const adminRoutes = require('./admin-routes');
const teamRoutes = require('./team-routes');
const gameRoutes = require('./game-routes');


router.use('/players', playerRoutes);
router.use('/admins', adminRoutes);
router.use('/teams', teamRoutes);
router.use('/games', gameRoutes);


module.exports = router;