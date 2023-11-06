import {
    GET_ALL_POKEMONS, GET_POKE_DETAIL, CLEAN_DETAIL, SEARCH_POKEMON,
    ORDER_POKEMON, FILTER_POKEMON, FILTER_TYPE_POKEMON, GET_TYPES} from "../actions/action-types"


const initialState = {
    allPokes: [],
    pokeDetail: {},
    allPokesCopy: [],
    types: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokes: action.payload,
                allPokesCopy: action.payload
            }
        case GET_POKE_DETAIL:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokeDetail: {}
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                allPokes: action.payload
            }
        case ORDER_POKEMON:
            let backUpOrder = [...state.allPokes]
            let PokesOrdered = []

            if (action.payload === "Ascendente_Alfa") {
                PokesOrdered = backUpOrder.sort((a, b) =>
                    a.name.localeCompare(b.name))
            }
            if (action.payload === "Descendente_Alfa") {
                PokesOrdered = backUpOrder.sort((a, b) =>
                    b.name.localeCompare(a.name))
            }
            if (action.payload === "Ascendente_Attack") {
                PokesOrdered = backUpOrder.sort((a, b) => {
                    return (a.attack - b.attack)
                })
            }
            if (action.payload === "Descendente_Attack") {
                PokesOrdered = backUpOrder.sort((a, b) => {
                    return (b.attack - a.attack)
                })
            }
            if (action.payload === "No_Order") {
                PokesOrdered = [...state.allPokesCopy]
            }
            return {
                ...state,
                allPokes: PokesOrdered
            }

        case FILTER_POKEMON:
            let backUpFilter = [...state.allPokesCopy]
            let PokesFiltered = []

            if (action.payload === "AllPokemons") {
                PokesFiltered = backUpFilter
            }
            else if (action.payload === "PokesFromApi") {
                PokesFiltered = backUpFilter.filter((pokemon) => !isNaN(pokemon.id))
            }
            else if (action.payload === "PokesFromBD") {
                PokesFiltered = backUpFilter.filter((pokemon) => isNaN(pokemon.id))
            }
            return {
                ...state,
                allPokes: PokesFiltered
            }
        
        case FILTER_TYPE_POKEMON:        
            
            if (action.payload === "All"){
                return{
                    ...state,
                    allPokes: [...state.allPokesCopy]
                }
            }           
            let filteredtype = [...state.allPokesCopy].filter((pokemon) => {
                if (pokemon.types.includes(action.payload)) {
                    return pokemon;}                        
            })
            return {
                ...state,
                allPokes: filteredtype
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }

        default:
            return {
                ...state
            }

    }
}

export default reducer