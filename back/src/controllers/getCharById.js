const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, image } = response.data;

      res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
