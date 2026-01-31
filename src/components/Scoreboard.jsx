import '../styles/scoreboard.css';

export default function Scoreboard({ selectedCards, highestScore }) {
  const currentScore = selectedCards.length;

  return (
    <div className="scoreboard main-container">
      <div className="score-container">
        <h2>Current Score: {currentScore}</h2>
        <h2>Highest Score: {highestScore}</h2>
      </div>
      <p>
        Get points by clicking on a card, but don't click on any more than once!
      </p>
    </div>
  );
}
