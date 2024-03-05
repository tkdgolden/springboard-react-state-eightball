import { useState } from 'react'
import './EightBall.css'

const EightBall = ({answers}) => {
    const [message, setMessage] = useState("Think of a Question");
    const [colorState, setColorState] = useState("black");
    function randomAnswer() {
        const newIndex = Math.floor(Math.random() * answers.length);
        const newAnswer = answers[newIndex];
        return newAnswer;
    }
    function handleClick() {
        const currentAnswer = randomAnswer();
        setMessage(currentAnswer.msg);
        setColorState(currentAnswer.color);
    }
    return (
        <div className="EightBall" onClick={handleClick}>
            <div className="EightBall-Answer"></div>
            <p className={colorState}>{message}</p>
        </div>
    );
}

export default EightBall