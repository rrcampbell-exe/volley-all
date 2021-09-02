const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all Users
router.get("/", (req, res) => {
  User.findAll({
    group: ['team_id'],
    attributes: { exclude: [`password`] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all Users with admin privileges
router.get("/admins/", (req, res) => {
  User.findAll({
    attributes: { exclude: [`password`] },
    where: {
      is_Admin: true,
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single User by "id"
router.get("/:id", (req, res) => {
  User.findOne({
    attribute: { exclude: [`password`] },
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
          res.status(404).json({ message: `No User found with this id` });
          return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single User by "id" with admin privileges
router.get("/admins/:id", (req, res) => {
  User.findOne({
    attribute: { exclude: [`password`] },
    where: {
      id: req.params.id,
      is_Admin: true,
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
          res.status(404).json({ message: `No User found with this id` });
          return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a User
router.post("/", withAuth, (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    team_id: req.body.team_id,
    email: req.body.email, // Inherited from User?
    password: req.body.password // Inherited from User?

  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
        res.status(404).json({ message: "We've never seen that User before. Check your ID and try again." });
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
        res.status(404).json({ message: "We can't delete Users who don't exist. Double-check your User ID and try again." });
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
