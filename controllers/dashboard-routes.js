const router = require('express').Router();
const sequelize = require('../config/connection');
const User = require('../models/User');
const withAuth = require('../utils/auth');

// display user's games on dashboard
router.get('/', withAuth, (req, res) => {
  
});

module.exports = router;
