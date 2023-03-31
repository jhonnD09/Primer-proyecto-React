const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image } = response.data;

      res.status(200).json({ id, name, gender, species, origin, image });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;
