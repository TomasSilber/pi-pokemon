import { useDispatch } from "react-redux"
import { FilterPokemon } from "../../redux/actions/actions"

const Filterbar = ()=>{
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const valorSeleccionado = event.target.value; 
        dispatch(FilterPokemon(valorSeleccionado)); 
      };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="AllPokemons">All Pokemons</option>
                <option value="PokesFromApi">Original Pokemons</option>
                <option value="PokesFromBD">Created Pokemons</option>
            </select>
        </div>
    )
}

export default Filterbar