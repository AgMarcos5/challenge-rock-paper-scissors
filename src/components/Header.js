function Header ({score}) {
    return (
        <header>
            <div className="title">
            Rock Paper Scissors
            </div>

            <div className="score-container">
                <p>Score</p>
                <div className="score">{score}</div>
            </div>
        </header>
    )
}

export default Header;