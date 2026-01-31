export default function GameOver({
  selectedCards,
  setSelectedCards,
  setIsGameOver,
  setShowSelectDifficulty,
}) {
  const currentScore = selectedCards.length;

  function handleClick() {
    setSelectedCards([]);
    setIsGameOver(false);
    setShowSelectDifficulty(true);
  }

  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <h3>Final Score: {currentScore}</h3>
      <button onClick={handleClick}>
        <h4>Restart Game</h4>
      </button>
    </div>
  );
}
