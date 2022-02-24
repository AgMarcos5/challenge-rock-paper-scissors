import rules_img from "../images/image-rules.svg"

function Rules ({rulesActive, toggleRules} ) {
    return (
        <>
        {
            rulesActive ? (
                <div className="rules-container">
                    <div className="rules">
                        <div className="title">
                            <h1>Rules</h1>
                            <div className="close" onClick={toggleRules}>X</div>
                        </div>
                        <img src={rules_img} alt="rules" />
                    </div>
                </div>
            ) : null
        }
        </>
    )
}

export default Rules;