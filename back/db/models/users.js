const S = require("sequelize");
const db = require("../index");

const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize : db, // We need to pass the connection instance
    modelName: "user", // We need to choose the model name
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
