import { Link } from "react-router-dom";
import icon_paper from "../images/icon-paper.svg"
import icon_rock from "../images/icon-rock.svg"
import icon_scissors from "../images/icon-scissors.svg"

function GameButton({setUserChoice, name}) {
    
    const handleClick = (value) => {
        setUserChoice(value);
    }

    const icon = {
        paper: icon_paper,
        rock: icon_rock,
        scissors: icon_scissors
    }

    return (
        <Link to="/game">
                <div className={`button ${name}`} onClick={() => handleClick(name)}>
                    <img src={icon[name]} alt={name} />
                </div>
        </Link>
    )
}

export default GameButton;