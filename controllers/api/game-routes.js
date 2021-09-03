const router = require("express").Router();
const { Game } = require("../../models");
const withAuth = require("../../utils/auth");
// Decide if withAuth is needed/where to put it

// GET all games
router.get("/", (req, res) => {
    Game.findAll({
      // TODO: double check that we don't need any special parameters here
    })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

// GET a single game by "id"
router.get(`/:game_id`, (req, res) => {
    Game.findOne({
        where: {
            game_id: req.params.game_id
        }
    })
        .then(dbGameData => {
            if (!dbGameData) {
                res.status(404).json({ message: `No game found with this id` });
                return;
            }
            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a new game
router.post(`/`, (req, res) => {
    Game.create({
        date: req.body.date,
        time: req.body.time,
        home_team: req.body.home_team,
        away_team: req.body.away_team
    })
        .then(dbGameData => res.json(dbGameData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a game by "id"
router.put(`/:game_id`, (req, res) => {
    Game.update(
        {
            where: {
                game_id: req.params.game_id
            }
        },
        {
            date: req.body.date,
            time: req.body.time,
            home_team: req.body.home_team,
            away_team: req.body.away_team
        }
    )
        .then(dbGameData => {
            if (!dbGameData) {
                res.statusMessage(404).json({ message: `No game found with this id` });
                return;
            }
            res.json(dbGameData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a game
router.delete(`/:game_id`, (req, res) => {
    Game.destroy({
        where: {
            game_id: req.params.game_id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: `No game found with this id` });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;