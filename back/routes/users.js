const express = require("express");
const passport = require("passport");
const {User} = require("../db/models/index");
const router = express.Router();


router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log('you are log in')
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  console.log('you are log out')
  req.logOut();
  res.sendStatus(200);
});

router.post("/checksession", (req, res) => {
  console.log(' se mantuvo la sesion ')
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
