const router = require('express').Router();
const sequelize = require('../config/connection');
const Team = require('../models/Team');
const withAuth = require('../utils/auth');

// TEAM EDIT ROUTE
router.get("/team/:id", withAuth, (req, res) => {
  Team.findOne(req.params.team_id, {
    where: {
      team_id: req.params.team_id,
    },
    attributes: [
      "team_id",
      "team_name",
      "code",
      "wins",
      "losses"
    ],
  })
    .then((dbTeamData) => {
      if (dbTeamData) {
        const team = dbTeamData.get({ plain: true });
        console.log(team)

        res.render("edit-team", {
          team,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;