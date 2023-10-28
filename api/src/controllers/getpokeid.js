const axios = require("axios");
const { Pokemon, Type } = require("../db");

const GETPokeid = async (req, res) => {
  try {
    const { id } = req.params;

    if (id.length > 4) {
      const pokemonFromDB = await Pokemon.findOne({ // Buscamos el Pokémon en la base de datos;
          where: { id: id },
          include: [
            {
              model: Type,
              through: { attributes: [] }, 
            },
          ],
      });
      if (pokemonFromDB.id) {
          return res.status(200).json(pokemonFromDB);
      }
  }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemonData = response.data;

    const pokemonDetails = {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
      hp: pokemonData.stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: pokemonData.stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: pokemonData.stats.find((stat) => stat.stat.name === "defense").base_stat,
      type: pokemonData.types.map((type)=>type.type.name)     
    };


    return res.status(200).json(pokemonDetails);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  GETPokeid
};
