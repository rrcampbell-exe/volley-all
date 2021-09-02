const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Team, Game} = require("../models");

router.get("/", (req, res) => {
  User.findOne({
    where:{
    user_id: req.session.user_id
    // user_id: 48
    },
    include: [Team]
  }).then(data => {
    Game.findAll({
      where: {
        // [Game.or]: [
        //   { home_team: data.dataValues.team.dataValues.team_id},
        //   { away_team: data.dataValues.team.dataValues.team_id}
        // ]
        home_team: data.dataValues.team.dataValues.team_id,
        // $or: [
        //   {
        //     away_team: data.dataValues.team.dataValues.team_id
        //   }
        // ]
      },
      include: [Team]
    }).then(gameData => {
      // console.log(gameData[0].dataValues.team)
      // console.log(data)
      let adminBool = data.dataValues.is_Admin
      let teamInfo = data.dataValues.team.dataValues
      teamInfo["game"] = gameData
      res.render("dashboard", { loggedIn: req.session.loggedIn, is_Admin: adminBool, team: teamInfo});
    })
  })
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
