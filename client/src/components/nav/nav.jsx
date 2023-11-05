import Button from "../button/button"
import { useLocation } from "react-router-dom"

const Nav = () => {
    const location= useLocation()
    return(
        <nav>
            {location.pathname !== "/home" ? <Button path={"/home"} text= "Home" /> : ""} 
            {location.pathname === "/home" ? <Button path={"/form"} text= "Create Pokémon" /> : "" }          
        </nav>
    )
}

export default Nav