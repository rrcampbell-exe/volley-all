// import all models
const User = require("./User");
const Team = require("./Team");
const Game = require("./Game");
const { Model } = require("sequelize");

// create associations
Team.hasMany(User);

User.belongsTo(Team, {
    foreignKey: 'team_id',
});

Team.hasMany(Game, {
    foreignKey: 'game_id'
});

module.exports = { User, Team, Game }

