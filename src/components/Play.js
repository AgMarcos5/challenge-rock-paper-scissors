// Seleccionar entre piedra, papel o tijeras
import GameButton from "./GameButton";

function Play ({setUserChoice}) {

    return (
        <div className="play-container">
            <GameButton setUserChoice={setUserChoice} name="paper"/>
            <GameButton setUserChoice={setUserChoice} name="scissors"/>
            <GameButton setUserChoice={setUserChoice} name="rock"/>
        </div>
    )
}

export default Play;