// import all models
const User = require("./User");
const Team = require("./Team");
const Game = require("./Game");
const Admin = require("./Admin");
const Player = require("./Player");
const { Model } = require("sequelize/types");

// create associations
Team.hasMany(Player, {
    foreignKey: 'team_id',
    onDelete: 'SET NULL'
});

Player.belongsTo(Team, {
    foreignKey: 'team_id',
    onDelete: 'SET NULL'
});

Game.hasOne(Team, {
    foreignKey: 'team_id',
    onDelete: 'SET NULL'
});

Team.hasMany(Game, {
    foreignKey: 'team_id'
});

Model.exports ={ User, Team, Game, Admin, Player }

