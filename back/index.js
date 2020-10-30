const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/index");
const volleyball = require("volleyball");
const routes = require("./routes");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./db/models/users");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

app.use(volleyball);

app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", routes);

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync({ force: false }).then(() => {
  app.listen(3000, function (req, res, next) {
    console.log("escuchando el puerto 3000");
  });
});
