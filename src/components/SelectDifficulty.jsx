export default function SelectDifficulty({
  setDifficulty,
  setShowSelectDifficulty,
}) {
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  const difficultyLevelsJsx = [];

  function handleLevelClick(e) {
    switch (e.target.textContent) {
      case 'Easy':
        setDifficulty(6);
        break;
      case 'Medium':
        setDifficulty(12);
        break;
      case 'Hard':
        setDifficulty(24);
        break;
      default:
        setDifficulty(6);
        break;
    }
  }

  function handleStartClick() {
    setShowSelectDifficulty(false);
  }

  difficultyLevels.forEach((level) =>
    difficultyLevelsJsx.push(
      <li key={level}>
        <button onClick={handleLevelClick}>
          <h3>{level}</h3>
        </button>
      </li>,
    ),
  );

  return (
    <div>
      <h2>Select Difficulty</h2>
      <ul>{difficultyLevelsJsx}</ul>
      <button onClick={handleStartClick}>
        <h4>Start Game</h4>
      </button>
    </div>
  );
}
