import Button from "../../components/button/button"


const Landing = () =>{
    return(
        <div>
            <h1>
                Bienvenido a la app de Pokémon!           
            </h1>
            <Button 
            path={"/home"} 
            text= "Home"
            />
        </div>
    )
}

export default Landing
