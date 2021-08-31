const router = require("express").Router();
const { Team, Game, Player } = require("../../models"); // Once associations are done, this will pull the models from models/index.js
const withAuth = require("../../utils/auth");
// Decide if withAuth is needed/where to put it

// GET all teams
router.get(`/`, (req, res) => {
    Team.findAll({
        // attributes: { exclude: [`code`] }  We might need to use this?
        include: [
            {
                model: Game, 
            },
            {
                model: Player,
                attributes: [`first_name`, `last_name` /* We could include team_id if we wanted */],
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
router.get(`/:id`, (req, res) => {
    Team.findOne({
        attributes: { exclude: [`code`] }, 
        include: [
            {
                model: Game,
                // Do I need/Can I use a "where" home_team/away_team: req.params.id ??
                // It might already be implied by the associations
            },
            {
                model: Player,
                attributes: [`first_name`, `last_name`],
                // Another "where" team_id: req.params.id ??
            }
        ],
        where: {
            id: req.params.id
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
        code: req.body.code // Is a team code required on creation?
        // Wins/losses/points will default to zero
    })
        .then(dbTeamData => res.json(dbTeamData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a team
router.put(`/:id`, (req, res) => {
    Team.update(
        {
            team_name: req.body.team_name,
            code: req.body.code,
            wins: req.body.wins,
            losses: req.body.losses,
            points: req.body.points
        },
        {
            where: {
                id: req.params.id
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
router.delete(`/:id`, (req, res) => {
    Team.destroy({
        where: {
            id: req.params.id
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