const S = require("sequelize");
const db= require("../index");

class Favs extends S.Model {}

Favs.init({
    Title: {
      type: S.STRING,
    },
    Poster: {
      type: S.STRING,
    },
  },
  {
    sequelize : db, // We need to pass the connection instance
    modelName: "fav", // We need to choose the model name
  }
);

module.exports = Favs;