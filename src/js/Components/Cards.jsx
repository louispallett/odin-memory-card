import { useState, useEffect } from "react";
import { apiData } from "../scripts/api_data";

export default function Cards() {

    const shuffleCards = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const shuffledArray = shuffleCards(apiData);

    return (
        <div className="cards-wrapper">
            {shuffledArray.map((data, index) => (
                <MemoryCard key={index} data={data} />
            ))}
        </div>
    )
}

function MemoryCard({ data }) {
    return (
        <div className="card">
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
    )
}

/*
==================================
Pseudocode
==================================

What we need to do is to do is create each memory card based on the prop "data" (this is the apiData[i] from the Cards()
component). Each memory card will be identical except for its content, which is gets entirely from the API.

The memory card is simple and should be done first.

____________________
Functionality (onClick)

Ensure that the initial set of memory cards shows first before adding any functionality. After this is completed successfully,
you can add a onClick function to each card.

    > The onClick can be added to MemoryCard(). It should do the following:
        // "Base" case 
        if index of API object (i.e. the card) is already in the selected array (i.e. already clicked)
            end game
            show score
            reset (unmount and remount Cards Component)
        else
            add API object to selected array
            update effect (re order API objects - i.e. shuffle cards and map)

*/