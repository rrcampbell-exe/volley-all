const router = require('express').Router();

const userRoutes = require('./user-routes');
const teamRoutes = require('./team-routes');
const gameRoutes = require('./game-routes');


router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/games', gameRoutes);


module.exports = router;