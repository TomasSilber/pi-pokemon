const { Router } = require('express');
const { GETpokeid } = require ("../controllers/getpokeid")
const { GETAllPokemons } = require ("../controllers/getallpokes")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/pokemon/4', GETpokeid);
router.get("/pokemon", GETAllPokemons)






module.exports = router;
