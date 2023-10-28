
const { Pokemon, Type } = require('../db'); 


const createPokemon = async (req, res) => {
  try {
    const { name, type, hp, attack, defense, image } = req.body;

    if (!name || !type || !hp || !attack || !defense || !image) {
      return res.status(400).json({ error: 'Por favor, proporciona todos los datos necesarios para crear un Pokémon.' });
    }

    const newPokemon = await Pokemon.create({
      name,
      hp: parseInt(hp),
      attack: parseInt(attack),
      defense: parseInt(defense),
      image,
    });


    const typeRecords = await Type.findAll({ // Buscar y relacionar los tipos con el Pokémon;
      where: {
        name: type,
      },
    });

    if (typeRecords.length === type.length) {

      await newPokemon.setTypes(typeRecords); // Relacionar los tipos encontrados con el nuevo Pokémon;

      return res.status(201).json(newPokemon);
    }
    return res.status(400).json({ message: "Alguno de los tipos especificados no existe" });
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPokemon,
};
