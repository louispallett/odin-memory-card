import { useState } from "react";
import Cards from "./Cards";
import Scores from "./Scores";

export default function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const changeCurrentScore = () => {
        setCurrentScore((currentScore) => currentScore + 1);
    }

    return (
        <div>
            <Scores currentScore={currentScore} highScore={highScore}/>
            <Cards changeCurrentScore={changeCurrentScore} />
        </div>
    )
}