import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GameButton from "./GameButton";

function Game ({userChoice, score, setScore}) {

    const choices = ['rock','paper','scissors'];
    const [computerChoice, setComputerChoice] = useState(null);
    const [result,setResult] = useState(null);
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0 && computerChoice){
            checkResult();
        }
      }, [counter]);

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice);
    }

    let navigate = useNavigate();

    useEffect( () => {
        if (!userChoice){
            return navigate("/");
        }
        else{
            generateComputerChoice();
        }
    },[])

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
        <div className="game">
            <div className="pick">
                <h2>You picked</h2>
                <GameButton name={userChoice}/>
            </div>
            {counter>0 ? (
                <div className="pick">
                    <div className="house_counter">{counter}</div>
                </div>
            ) : (
                <>
                <div className="result">
                    <h1>{result}</h1> <br/>
                    <div >
                        <Link className="again" to="/" onClick={() => setComputerChoice()}>Play again</Link>
                    </div>
                </div>
                <div className="pick house">
                    <h2>The house picked</h2>
                    <GameButton name={computerChoice}/>
                </div>
                </>
            )}
        </div>
    )
}

export default Game;