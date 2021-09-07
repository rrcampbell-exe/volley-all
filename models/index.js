// import all models
const User = require("./User");
const Team = require("./Team");
const Game = require("./Game");
const { Model } = require("sequelize");

// create associations
Team.hasMany(User, {
    foreignKey: 'team_name',
    onDelete: 'CASCADE'
});

User.belongsTo(Team, {
<<<<<<< HEAD
    foreignKey: 'team_id'
});

Team.hasMany(Game, {
    foreignKey: 'home_team'
=======
    foreignKey: 'team_name'
>>>>>>> 5c460756aff4caa22d4c0fa8ab4009b5c6d5785a
});

Game.belongsTo(Team, {
    foreignKey: 'home_team'
})
module.exports = { User, Team, Game }

