const { Favorite } = require("../DB_connection");

const deleteFav = async (id) => {
  const character = await Favorite.findByPk(id);
  await character.destroy();
  const allCharacters = Favorite.findAll();
  return allCharacters;
};

module.exports = deleteFav;
