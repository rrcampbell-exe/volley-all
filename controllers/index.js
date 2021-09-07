const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const editRoutes = require("./edit-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/edit", editRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
