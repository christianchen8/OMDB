const User = require("./users");
const Favs = require("./favs");

Favs.belongsTo(User);

module.exports = {Favs,User};