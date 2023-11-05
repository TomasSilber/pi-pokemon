import { GET_ALL_POKEMONS, GET_POKE_DETAIL, CLEAN_DETAIL, SEARCH_POKEMON } from "../actions/action-types"

const initialState ={
    allPokes: [],
    pokeDetail: {},
    allPokesCopy: []
}

const reducer = ( state = initialState, action)=>{
    switch (action.type){
        case GET_ALL_POKEMONS:
        return{
            ...state,
            allPokes: action.payload,
            allPokesCopy: action.payload
        }
        case GET_POKE_DETAIL:
            return{
                ...state,
                pokeDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                pokeDetail: {}
            }
        case SEARCH_POKEMON:
            return{
                ...state,
                allPokes: action.payload
            }
        default:
            return {...state}
    }

}

export default reducer