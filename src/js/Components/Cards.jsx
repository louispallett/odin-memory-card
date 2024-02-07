import { useState, useEffect } from "react";
import { apiData } from "../scripts/api_data";

export default function Cards() {
    return (
        <div>

        </div>
    )
}

function MemoryCard({ data }) {
    return (
        <div 
            className="card-wrapper"
            style={{ backgroundImage: `url(${data.image})`}}
        >

        </div>
    )
}