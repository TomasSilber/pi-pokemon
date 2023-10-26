const axios = require("axios");

const GETPokename = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "Por favor, proporciona un nombre de Pokémon válido en la consulta." });
    }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (response.status === 200) {
      const pokemonData = response.data;

      const pokemonDetails = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        hp: pokemonData.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: pokemonData.stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: pokemonData.stats.find((stat) => stat.stat.name === "defense").base_stat,
      };

      return res.status(200).json(pokemonDetails);
    } else {
      return res.status(404).json({ error: "Pokémon no encontrado." });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  GETPokename
};
