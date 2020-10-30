const express = require("express");
const router = express.Router();
const user = require("./users");
const favs = require("./favs");

router.use("/user", user);
router.use("/favs", favs);

module.exports = router;
