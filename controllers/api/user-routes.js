const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    // TODO: populate parameters by which all users are found
  });
  // then
  // catch
});

router.get("/:id", (req, res) => {
  User.findOne({
    // TODO: populate parameters by which one user is found by id
  })
    // then
    // catch
});

router.post("/", withAuth, (req, res) => {
  User.create({
    // TODO: populate parameters with which users are created
  })
    // then
});

router.post("/login", withAuth, (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
  .then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No one's bumping, setting, or spiking with that email address." });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "That password is incorrect." });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "Bump, set, spike! You are now logged in." });
    });
  });
});

router.put("/:id", withAuth, (req, res) => {
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "We've never seen that player before. Check your ID and try again." });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "We can't delete players who don't exist. Double-check your player ID and try again." });
        return;
      }
      res.json(dbUserData);
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
