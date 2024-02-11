import { useEffect, useState } from "react";
import { apiData } from "../scripts/api_data";

let highScore = 0;
let currentScore = 0;

const highScoreElement = document.querySelector(".high-score");
const currentScoreElement = document.querySelector(".current-score");

highScoreElement.textContent = `High Score: ${highScore}`;
currentScoreElement.textContent = `Current Score: ${currentScore}`;

export default function Cards() {
    const [shuffledArray, setShuffledArray] = useState([]);

    const shuffleCards = (array) => {
        const cards = [...array];
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    const handleClick = () => {
        const newShuffledArray = shuffleCards(apiData);
        setShuffledArray(newShuffledArray);
    }

    useEffect(() => {
        const initialShuffledArray = shuffleCards(apiData);
        setShuffledArray(initialShuffledArray);
    }, []);

    return (
        <div className="cards-wrapper">
            {shuffledArray.map((data, index) => (
                <div className="card" key={index} onClick={handleClick}>
                    <div className="card-alias">
                        <p>{data.alias}</p>
                    </div>
                    <div className="card-image"
                        style={{ backgroundImage: `url(${data.image})` }}
                    ></div>
                    <div className="card-name">
                        <p>{data.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
