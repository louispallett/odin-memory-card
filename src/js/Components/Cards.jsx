import { useState, useEffect } from "react";
import { apiData } from "../scripts/api_data";

export default function Cards() {
    return (
        <div className="cards-wrapper">
            {/* TEMPORARY */}
            <MemoryCard data={apiData[12]} />
            <MemoryCard data={apiData[11]} />
            <MemoryCard data={apiData[1]} />
            <MemoryCard data={apiData[0]} />
            {/* TEMPORARY */}
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