const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, image, species, gender } = req.body;

  if (!name || !image || !species || !gender)
    res.status(402).send("Faltan datos");
  try {
    const [fav, created] = await Favorite.findOrCreate({
      where: { id },
      defaults: { name, image, species, gender },
    });
    const allFavorites = await Favorite.findAll();

    return res.status(201).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
