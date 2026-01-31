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
    <div className="game-over main-container">
      <h2>Game Over</h2>
      <h3>Final Score: {currentScore}</h3>
      <button className="button primary" onClick={handleClick}>
        <h4>
          <span className="front">Restart Game</span>
        </h4>
      </button>
    </div>
  );
}
