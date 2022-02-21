// Seleccionar entre piedra, papel o tijeras

import { Link } from "react-router-dom";

function Play ({setUserChoice}) {

    const handleClick = (value) => {
        setUserChoice(value);
    }

    return (
        <div>
            <Link to="/game">
                <div onClick={() => handleClick('rock')}>Rock</div>
            </Link>
            <Link to="/game">
                <div onClick={() => handleClick('paper')}>Paper</div>
            </Link>
            <Link to="/game">
                <div onClick={() => handleClick('scissors')}>Scissors</div>
            </Link>
        </div>
    )
}

export default Play;