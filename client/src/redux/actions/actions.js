import { GET_ALL_POKEMONS, GET_POKE_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from "axios"

const URL = "http://localhost:3001/pokemon"


export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios (URL)
            return dispatch ({type: GET_ALL_POKEMONS, payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPokeDetail = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios (`${URL}/${id}`)
            return dispatch ({type: GET_POKE_DETAIL, payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const CleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}


