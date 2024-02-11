import { useEffect, useState } from "react";
import { apiData } from "../scripts/api_data";

/*
==================================
Keeping Score
==================================

We now need to implement how to keep score. Firstly, this needs to be done via the handleClick function:

    Loop through selectedCards[]
        if (selectedCards[i] == card.key)
            if (currentScore > highScore)
                highScore = currentScore
            Re render Cards() and set currentScore to 0
            break from function (return/break)
        (we cannot put an else statement here as we need to finish the loop until we reach the end)
    push card.key to selectedCards
    invoke function to increment currentScore (we will need to import this from Scores.jsx)
    (shuffle cards:
        const newShuffledArray = shuffleCards(apiData);
        setShuffledArray(newShuffledArray);
    )

*/

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
