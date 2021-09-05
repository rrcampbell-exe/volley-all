const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Team, Game } = require("../models");
const { Op } = require("sequelize");

// IF/ELSE TO HANDLE ADMIN LOGINS

router.get("/", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  User.findOne({
    where: {
      user_id: req.session.user_id,
    },
    include: [Team],
  }).then((data) => {
    // checking if user is admin or player
    if (data.dataValues.team_id === null) {
      Game.findAll({}).then((gameInfo) => {
        console.log(gameInfo);
        // if admin, then pull all team info to display
        Team.findAll({}).then((teamInfo) => {
          // console.log(teamInfo)
          let adminBool = data.dataValues.is_Admin;
          res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            is_Admin: adminBool,
            team: teamInfo,
            game: gameInfo,
          });
          return;
        });
      });
    } else {
      // logging in as player
      User.findAll({
        where: {
          team_id: data.dataValues.team_id,
        },
      }).then((rosterData) => {
        console.log(rosterData);
        Game.findAll({
          where: {
            [Op.or]: [
              { home_team: data.dataValues.team.dataValues.team_id },
              { away_team: data.dataValues.team.dataValues.team_id },
            ],
          },
          include: [
            {model: Team,
            attributes: ['team_name'],}]
        }).then((gameData) => {
          let adminBool = data.dataValues_is_Admin;
          let teamInfo = data.dataValues.team.dataValues;
          teamInfo["game"] = gameData;
          res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            is_Admin: adminBool,
            team: teamInfo,
            user: rosterData,
          });
        });
      });
    }
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
