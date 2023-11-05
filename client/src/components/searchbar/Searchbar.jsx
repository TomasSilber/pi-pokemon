import { useState } from "react"
import { useDispatch } from "react-redux"
import { SearchPokemon, getAllPokemons } from "../../redux/actions/actions"



const Searchbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handlechange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input onChange={handlechange} type="search" value={input} />
            <button onClick={() => dispatch(SearchPokemon(input))}> Search </button>
            <button onClick={() => dispatch(getAllPokemons())}> Reset </button>

        </div>
    )


}

export default Searchbar