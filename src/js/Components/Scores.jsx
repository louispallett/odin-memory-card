import { useState } from "react";

export default function Scores() {
    let highScore = 0;
    const [currentScore, setCurrentScore] = useState(0);

    const incrementScore = () => {
        setCurrentScore((currentScore) => currentScore + 1);
    }

    return (
        <div className="scores">
            <p className="high-score">High Score: {highScore}</p>
            <p className="current-score">Current Score: {currentScore}</p>
        </div>
    );
}