export default function Scores({ highScore, currentScore }) {
    return (
        <div className="scores">
            <p className="high-score">High Score: {highScore}</p>
            <p className="current-score">Current Score: {currentScore}</p>
        </div>
    );
}