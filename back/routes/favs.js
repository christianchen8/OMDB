const express = require("express");
const {Favs} = require("../db/models/index");
const router = express.Router();

router.post("/addfav", (req, res) => {
  Favs.create(req.body).then((data) => {
    data.setUser(req.body.user)
  }).then(()=>res.send("pelicula aglegala"))
});

router.get("/allfavs/:id", (req, res) => {
  console.log("----aca esta areq.params----", req.params.id)
  Favs.findAll({
    where: {
      userId: req.params.id,
    },
  })
  .then(data => res.send(data));
});

router.delete("/delete/:id", (req,res)=>{
  Favs.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("Favorito eliminado"));
})

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
