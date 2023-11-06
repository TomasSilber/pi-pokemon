import { useDispatch } from "react-redux"
import { OrderPokemon } from "../../redux/actions/actions"

const Orderbar = ()=>{
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const valorSeleccionado = event.target.value; 
        dispatch(OrderPokemon(valorSeleccionado)); 
      };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="No_Order">Pokédex</option>
                <option value="Ascendente_Alfa">Ascending Name</option>
                <option value="Descendente_Alfa">Descending Name</option>
                <option value="Ascendente_Attack">Ascending Attack</option>
                <option value="Descendente_Attack" >Descending Attack</option>
            </select>
        </div>
    )
}

export default Orderbar