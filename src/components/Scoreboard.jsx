import '../styles/scoreboard.css';

export default function Scoreboard({ selectedCards, highestScore }) {
  const currentScore = selectedCards.length;

  return (
    <div className="scoreboard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Highest Score: {highestScore}</h2>
    </div>
  );
}
