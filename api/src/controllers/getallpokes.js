const { Pokemon, Type } = require ("../db")
const axios = require("axios");
const URL = "http://pokeapi.co/api/v2/pokemon?limit=60";

const GETAllPokemons = async (req, res) => {
  
  try {
    const response = await axios.get(`${URL}`);

    if (!response) {
      return res.status(404).send("No se pudo obtener la lista de Pokémon");
    }

    const { results } = response.data;
    
    const allPokemons = await Promise.all( // Busqueda de la API
      results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);

        return {
          id: pokemonData.data.id,
          name: pokemonData.data.name,
          image: pokemonData.data.sprites.front_default,
          hp: pokemonData.data.stats.find((stat) => stat.stat.name === "hp").base_stat,
          attack: pokemonData.data.stats.find((stat) => stat.stat.name === "attack").base_stat,
          defense: pokemonData.data.stats.find((stat) => stat.stat.name === "defense").base_stat,
          types: pokemonData.data.types.map((type)=>type.type.name).join(` / `)
        };
      })
    );
    
    const Pokecreated = await Pokemon.findAll({ // Busqueda de la BDD
      include: [ // y le incluye su type
          {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] } 
          }]
  } );
  
  const pokeDBFiltered = Pokecreated.map((pokemon)=>({// Mapeo de la info de la BDD
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.image,
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    types: pokemon.types.map((type)=>type.name).join(` / `)
  }))

    const respuestafinal= [...pokeDBFiltered, ...allPokemons]
   
    return res.status(200).json(respuestafinal);
    
} catch (error) {
  return res.status(500).send(error.message);
}
};

module.exports = { 
 GETAllPokemons
};