import { useState, useEffect } from "react";
import { apiData } from "../scripts/api_data";

export default function Cards() {
    const [canPlay, setCanPlay] = useState(true);

    const selectedCards = [];

    const shuffleCards = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const handleClick = ({ data }) => {
        for (let i = 0; i < selectedCards.length; i++) {
            if  (data.key == selectedCards[i]) {
                highScore = selectedCards.length;
                // Because canPlay is changing state, the component here re renders:
                    // We do want it to do this, but we also want the cards to shuffle onClick...
                setCanPlay(false);
                break;
            }
        }

        if (canPlay) {
            selectedCards.push(data.key);
        }
        
        console.log(selectedCards);
        console.log(canPlay);
        console.log(selectedCards);
    }

    useEffect(() => {
        
        return () => {
            
        }
    })

    const shuffledArray = shuffleCards(apiData);

    return (
        <div className="cards-wrapper">
            {shuffledArray.map((apiData, index) => (
                <div className="card" key={apiData.key} onClick={() => handleClick({ data: apiData })}>
                    <div className="card-alias">
                        <p>{apiData.alias}</p>
                    </div>
                    <div className="card-image"
                        style={{ backgroundImage: `url(${apiData.image})` }}
                    ></div>
                    <div className="card-name">
                        <p>{apiData.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}