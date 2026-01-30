export default function Scoreboard({ selectedCards }) {
  const currentScore = selectedCards.length;

  return (
    <div className="scoreboard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Highest Score: ABC</h2>
    </div>
  );
}
