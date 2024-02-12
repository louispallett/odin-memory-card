import { useEffect, useState } from "react";
import { apiData } from "../scripts/api_data";

let selectedCards = [];

export default function Cards({ changeCurrentScore, changeHighScore }) {
    const [shuffledArray, setShuffledArray] = useState([]);

    const shuffleCards = (array) => {
        const cards = [...array];
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    const handleClick = (key) => {
        for (let i = 0; i < selectedCards.length; i++) {
            if (selectedCards[i] == key.data) {
                changeHighScore();
                selectedCards = [];
                const newShuffledArray = shuffleCards(apiData);
                setShuffledArray(newShuffledArray);
                // Breaking from the loop here, as we don't need it to continue the loop once we find a duplicate!
                // We also don't want the card to be added!
                return;
            }
        }
        // If play is legal
        // Push key number to array
        selectedCards.push(key.data);

        // Update Current Score
        changeCurrentScore();

        // Shuffle the cards
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
                <div className="card" key={index} onClick={() => handleClick({data: data.key})}>
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
