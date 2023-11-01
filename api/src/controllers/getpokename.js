const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');


const GETPokename = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: 'Por favor, proporciona un nombre de Pokémon válido en la consulta.' });
    }

    const lowercaseName = name.toLowerCase();

    // Primero, intenta buscar el Pokémon en la base de datos
    const pokeDB = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${lowercaseName}%`, // Búsqueda insensible a mayúsculas y minúsculas
        },
      },
      include: [
        {
          model: Type,
          through: { attributes: [] }, 
        },
      ],
    });

    if (pokeDB.length>0) {
      return res.status(200).json(pokeDB);
    }

    // Si no se encuentra en la base de datos, busca en la API de PokeAPI
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowercaseName}`);

    if (response.status === 200) {
      const pokemonData = response.data;

      const pokemonDetails = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        hp: pokemonData.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        attack: pokemonData.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: pokemonData.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        types: pokemonData.types.map((type) => type.type.name),
      };
      
      

      return res.status(200).json(pokemonDetails);
    } else {
      return res.status(404).json({ error: 'Pokémon no encontrado en la API.' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error en la búsqueda de Pokémon.' });
  }
};

module.exports = {
  GETPokename,
};
