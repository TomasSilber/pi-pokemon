import { Link } from "react-router-dom"
import Detail from "../../view/detail/detail"

const Card = ({id, name, image, types})=> {
    return(
        <Link to={`/detail/${id}`} >
            <h2>{name} </h2>
            <p>{types} </p>
            <img src={image} alt= {name} />
        </Link>
    )
}

export default Card
