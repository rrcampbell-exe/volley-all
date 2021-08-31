const router = require("express").Router();
const { Player } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all players
router.get("/", (req, res) => {
  Player.findAll({
    // TODO: populate parameters by which all users are found
  });
  // then
  // catch
});

// GET a single player by "id"
router.get("/:id", (req, res) => {
  Player.findOne({
    // TODO: populate parameters by which one user is found by id
  })
    // then
    // catch
});

// Create a player
router.post("/", withAuth, (req, res) => {
  Player.create({
    // TODO: populate parameters with which users are created
  })
    // then
});

router.post("/login", withAuth, (req, res) => {
  Player.findOne({
    where: {
      email: req.body.email,
    },
  })
  .then((dbPlayerData) => {
    if (!dbPlayerData) {
      res.status(400).json({ message: "No one's bumping, setting, or spiking with that email address." });
      return;
    }

    const validPassword = dbPlayerData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "That password is incorrect." });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbPlayerData.id;
      req.session.username = dbPlayerData.username;
      req.session.loggedIn = true;

      res.json({ player: dbPlayerData, message: "Bump, set, spike! You are now logged in." });
    });
  });
});


router.put("/:id", withAuth, (req, res) => {
  // pass in req.body instead to only update what's passed through
  Player.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbPlayerData) => {
      if (!dbPlayerData[0]) {
        res.status(404).json({ message: "We've never seen that player before. Check your ID and try again." });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Player.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPlayerData) => {
      if (!dbPlayerData) {
        res.status(404).json({ message: "We can't delete players who don't exist. Double-check your player ID and try again." });
        return;
      }
      res.json(dbPlayerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/logout", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
