import rules_img from "../images/image-rules.svg"
import close_img from "../images/icon-close.svg"

function Rules ({rulesActive, toggleRules} ) {
    return (
        <>
        {
            rulesActive ? (
                <div className="rules-container">
                    <div className="rules">
                        <div className="title">
                            <h1>Rules</h1>
                            <div className="close" onClick={toggleRules}><img src={close_img} alt="close" /></div>
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