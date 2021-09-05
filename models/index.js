// import all models
const User = require("./User");
const Team = require("./Team");
const Game = require("./Game");
const { Model } = require("sequelize");

// create associations
Team.hasMany(User, {
    foreignKey: 'team_name'
});

User.belongsTo(Team, {
    foreignKey: 'team_name'
});

Game.belongsTo(Team, {
    foreignKey: 'away_team'
})
module.exports = { User, Team, Game }

