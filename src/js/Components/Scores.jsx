import { useState } from "react";

export default function Scores() {
    let highScore = 0;
    let currentScore = 0;

    return (
        <div className="scores">
            <p className="high-score">High Score: {highScore}</p>
            <p className="current-score">Current Score: {currentScore}</p>
        </div>
    );
}