
const { Pokemon, Types } = require('../db'); 


const createPokemon = async (req, res) => {
  try {
    const { name, type, hp, attack, defense } = req.body;

    if (!name || !type || !hp || !attack || !defense) {
      return res.status(400).json({ error: 'Por favor, proporciona todos los datos necesarios para crear un Pokémon.' });
    }

    const newPokemon = await Pokemon.create({
      name,
      hp: parseInt(hp),
      attack: parseInt(attack),
      defense: parseInt(defense),
    });

    const pokemonType = await Types.findOrCreate({ where: { name: type } });
    await newPokemon.addType(pokemonType[0]);

    return res.status(201).json(newPokemon);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPokemon,
};
