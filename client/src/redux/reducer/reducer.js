import { GET_ALL_POKEMONS, GET_POKE_DETAIL, CLEAN_DETAIL } from "../actions/action-types"

const initialState ={
    allPokes: [],
    pokeDetail: {}
}

const reducer = ( state = initialState, action)=>{
    switch (action.type){
        case GET_ALL_POKEMONS:
        return{
            ...state,
            allPokes: action.payload
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
        default:
            return {...state}
    }

}

export default reducer