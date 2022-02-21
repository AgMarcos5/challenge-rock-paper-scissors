function Header ({score}) {
    return (
        <header>
            <div className="title">
            Rock<br/>Paper<br/>Scissors
            </div>

            <div className="score-container">
                <p>Score</p>
                <div className="score">{score}</div>
            </div>
        </header>
    )
}

export default Header;