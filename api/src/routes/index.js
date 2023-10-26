const { Router } = require('express');
const { GETPokeid } = require ("../controllers/getpokeid")
const { GETAllPokemons } = require ("../controllers/getallpokes")
const {GETPokename} = require ("../controllers/getpokename")
const {createPokemon} = require ("../controllers/postpoke")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/pokemon/4', GETpokeid);
router.get("/pokemon/name", GETPokename)
router.get("/pokemon/:id", GETPokeid)
router.get("/pokemon", GETAllPokemons)
router.post("/pokemon", createPokemon)






module.exports = router;
