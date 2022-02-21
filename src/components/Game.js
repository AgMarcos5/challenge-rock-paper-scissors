import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Game ({userChoice, score, setScore}) {

    const choices = ['rock','paper','scissors'];
    const [computerChoice, setComputerChoice] = useState(null);
    const [result,setResult] = useState(null);

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice);
    }

    useEffect( () => {
        generateComputerChoice();
    },[])

    useEffect( () => {
        checkResult();
    }, [computerChoice])

    const checkResult = () => {
        switch(userChoice+computerChoice){
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                setResult('YOU WIN');
                setScore(score+1);
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                setResult('YOU LOOSE');
                setScore(score-1);
                break;
            default:
                setResult('ITS A DRAW');
                break;
        }
    }

    return (
        <div>
        You picked: {userChoice} <br/>
        The house picked: {computerChoice} <br/>
        Result: {result}

        <Link to="/" onClick={() => setComputerChoice()}>Play again</Link>
        </div>
    )
}

export default Game;