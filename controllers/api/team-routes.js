const router = require("express").Router();
const { UUIDV4 } = require("sequelize");
const { Team, Game, User } = require("../../models"); // Once associations are done, this will pull the models from models/index.js
const withAuth = require("../../utils/auth");

// GET all teams
router.get(`/`, (req, res) => {
    Team.findAll({
    
        include: [
            {
                model: User,
                attributes: [`first_name`, `last_name`],
            }
        ],
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a single team by "id"
router.get(`/:team_id`, (req, res) => {
    Team.findOne({
        attributes: { exclude: [`code`] }, 
        include: [
            {
                model: User,
                attributes: [`first_name`, `last_name`],
            }
        ],
        where: {
            team_id: req.params.team_id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: `No team found with this id` });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a team
router.post(`/`, (req, res) => {
    Team.create({
        team_name: req.body.team_name,
        code: req.body.code,
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a team
router.put(`/:team_id`, (req, res) => {
    Team.update(
        {
            team_name: req.body.team_name,
            code: req.body.code,
            wins: req.body.wins,
            losses: req.body.losses,
        },
        {
            where: {
                team_id: req.params.team_id
            }
        }
    )
        .then(dbTeamData => {
            if (!dbTeamData) {
                res.status(404).json({ message: `No team found with this id` });
                return;
            }
            res.json(dbTeamData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a team
router.delete(`/:team_id`, (req, res) => {
    Team.destroy({
        where: {
            team_id: req.params.team_id
        }
    })
        .then(dbTeamData => {
            if (!dbTeamData) {
                res.status(404).json({ message: `No team found with this id` });
                return;
            }
            res.json(dbTeamData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;