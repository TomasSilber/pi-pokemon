import { useEffect, useState } from "react"
import validation from "./validation"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { CreatePokemon, GetTypes } from "../../redux/actions/actions"

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        types: []
    })

    const [errors, setErrors] = useState({})
    

    const handlechange = (event) =>{
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })   
         setErrors(validation(input))     
    }

    const handleSubmit = (event) =>{
        event.preventDefault()      
        dispatch(CreatePokemon(input))
        navigate("/home")
        
    }
    const getTypes = useSelector((state)=> state.types)
    useEffect(() => {
        dispatch(GetTypes());
      }, []);

    

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
    
        // Si ya se seleccionaron 2 tipos, no se permite seleccionar más
        if (input.types.length === 2 && !input.types.includes(selectedType)) {
          return;
        }
    
        // Agregar o eliminar el tipo seleccionado
        const updatedTypes = input.types.includes(selectedType)
          ? input.types.filter((type) => type !== selectedType)
          : [...input.types, selectedType];
    
        setInput({ ...input, types: updatedTypes });
      };

    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name: </label>
            <input onChange={handlechange} type="name" name="name" value={input.name} />
            {errors.name}
                       
            <br />    
            <label htmlFor="image">Image URL: </label>
            <input onChange={handlechange} type="text" name="image" value={input.image} />
            {errors.image}

            <br />
            <label htmlFor="HealthPoints">Health Points: </label>
            <input onChange={handlechange} type="number" name="hp" value={input.hp}/>
            {errors.hp}

            <br />
            <label htmlFor="Attack">Attack: </label>
            <input onChange={handlechange} type="number"name="attack" value={input.attack}/>
            {errors.attack}

            <br />
            <label htmlFor="Defense">Defense: </label>
            <input onChange={handlechange} type="number" name="defense" value={input.defense}/>
            {errors.defense}

            <br />
            <label htmlFor="types">Types (select up to 2):</label>
                {getTypes.map((type) => (
                    <div key={type.name} >
                        <input
                            type="checkbox"
                            name="type"
                            value={type.name}
                            checked={input.types.includes(type.name)}
                            onChange={handleTypeChange}
                            disabled={
                                input.types.length === 2 && !input.types.includes(type.name)
                            }
                        />
                {type.name}
            </div>
      ))}

            <br />
            <button 
            type="submit" 
            disabled=
            {input.name==="" || input.image==="" || input.hp==="" || input.attack==="" || input.defense==="" || input.types<1} 
             >Submit</button>

        </form>
    )
}

export default Form