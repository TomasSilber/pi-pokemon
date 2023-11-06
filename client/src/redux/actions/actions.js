import { GET_ALL_POKEMONS, GET_POKE_DETAIL, CLEAN_DETAIL, SEARCH_POKEMON, 
    ORDER_POKEMON, FILTER_POKEMON, FILTER_TYPE_POKEMON, GET_TYPES } from "./action-types";
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

export const CreatePokemon = (input)=>{
    return async ()=> {
        try {
            const {data}= await axios.post(URL, input) 
            return(data)
        } catch (error) {
           window.alert(error.response.data.error);
            
        }
    }   
}

export const SearchPokemon = (name)=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(`${URL}/name?name=${name}`)
            return dispatch ({type: SEARCH_POKEMON, payload: data})
        } catch (error) {
            window.alert("Pokemon not found")
        }
    }
}

export const OrderPokemon = (order)=>{
    return async (dispatch)=> {
        try {
            return dispatch({type: ORDER_POKEMON, payload: order})
        } catch (error) {
            console.log(error);
        }
    }
}

export const FilterPokemon = (filter)=>{
    return async (dispatch)=>{
        try {
            return dispatch ({type: FILTER_POKEMON, payload: filter})
        } catch (error) {
            console.log(error);
        }
    }
}

export const FilterTypePokemon = (filter)=>{
    return async (dispatch)=>{
        try {
            return dispatch ({type: FILTER_TYPE_POKEMON, payload: filter})
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetTypes = () =>{
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/types");          
            return dispatch ({type: GET_TYPES, payload: response.data});
        } catch (error) {
            console.error(error.message);
        }
    };
}