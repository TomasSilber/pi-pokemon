import Button from "../../components/button/button"
import "./landing.modules.css"


const Landing = () => {
    return (
        <div className="container-landing">
            <div className="bienvenida">
                <h1>
                    Bienvenido a la app de Pokémon!
                </h1>
                <Button
                    path={"/home"}
                    text="Home"
                />
            </div>

        </div>
    )
}

export default Landing
