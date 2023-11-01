import { useSelector, useDispatch } from "react-redux"
import { getAllPokemons } from "../../redux/actions/actions"; 
import { useEffect } from "react";
import Card from "../card/card";


const Cards = ()=>{
    const dispatch = useDispatch()
    const allPokes = useSelector((state)=>state.allPokes);

    useEffect(()=>{
        dispatch(getAllPokemons())
    }, [])

    return(
        <div>
            {
                allPokes?.map((pokemon)=>{
                    return(
                        <Card
                            key = {pokemon.id}
                            id = {pokemon.id}
                            name = {pokemon.name}
                            image = {pokemon.image}
                            types = {pokemon.types}
                        />
                    )
                })
            }
            
        </div>
    )
}

export default Cards