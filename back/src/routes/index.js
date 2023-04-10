const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
let favs = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCharacter = await deleteFav(id);
    res.status(200).json(deletedCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// router.post("/fav", (req, res) => {
//   favs.push(req.body);
//   res.status(200).json(favs);
// });

// router.get("/fav", (req, res) => {
//   res.status(200).json(favs);
// });

// router.delete("/fav/:id", (req, res) => {
//   const { id } = req.params;
//   favs = favs.filter((char) => char.id != id);
//   res.status(200).json(favs);
// });

module.exports = router;
