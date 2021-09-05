// import all models
const User = require("./User");
const Team = require("./Team");
const Game = require("./Game");
const { Model } = require("sequelize");

// create associations
Team.hasMany(User, {
    foreignKey: 'team_id'
});

User.belongsTo(Team, {
    foreignKey: 'team_id'
});

Team.hasMany(Game, {
    foreignKey: 'home_team'
});

Game.belongsTo(Team, {
    foreignKey: 'home_team'
})
module.exports = { User, Team, Game }

