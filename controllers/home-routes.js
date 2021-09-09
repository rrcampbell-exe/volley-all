const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Team, Game } = require("../models");
const { Op } = require("sequelize");
const withAuth = require('../utils/auth')

// IF/ELSE TO HANDLE ADMIN VS PLAYER LOGINS

router.get("/", (req, res) => {
  // check if user is logged in: if not, send to login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  // if user is logged in, find Team data
  Team.findAll({
    order: [["wins", "DESC"]],
  }).then((teamInfo) => {
    // find the specific user who is trying to login
    User.findOne({
      where: {
        user_id: req.session.user_id,
      },
    }).then((userData) => {
      if (typeof userData.dataValues.team_name === "string") {
        Team.findOne({
          where: {
            team_name: userData.dataValues.team_name,
          },
        }).then((userTeamInfo) => {
          User.findAll({
            where: {
              team_name: userData.dataValues.team_name,
            },
          }).then((rosterData) => {
            Game.findAll({
              order: [["date", "ASC"], ["time", "ASC"]],
              where: {
                [Op.or]: [
                  { home_team: userData.dataValues.team_name },
                  { away_team: userData.dataValues.team_name },
                ],
              },
            }).then((allGames) => {
              let adminBool = userData.dataValues.is_Admin;
              res.render("player-dashboard", {
                loggedIn: req.session.loggedIn,
                is_Admin: adminBool,
                teams: teamInfo,
                user_team: userTeamInfo,
                game: allGames,
                user: userData,
                roster: rosterData,
              });
            });
          });
        });
      } else {
        Game.findAll({
          order: [["date", "ASC"], ["time", "ASC"]],
        }).then((gameInfo) => {
          let adminBool = userData.dataValues.is_Admin;
          res.render("admin-dashboard", {
            loggedIn: req.session.loggedIn,
            is_Admin: adminBool,
            team: teamInfo,
            game: gameInfo,
          });
        });
      }
    });
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
