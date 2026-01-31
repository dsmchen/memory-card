import { useState } from 'react';
import '../styles/SelectDifficulty.css';

export default function SelectDifficulty({
  setDifficulty,
  setShowSelectDifficulty,
}) {
  const [selectedId, setSelectedId] = useState('Easy');
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  const difficultyLevelsJsx = [];

  function handleLevelClick(e) {
    setSelectedId(e.target.textContent);
    switch (e.target.textContent) {
      case 'Easy':
        setDifficulty(4);
        break;
      case 'Medium':
        setDifficulty(12);
        break;
      case 'Hard':
        setDifficulty(24);
        break;
      default:
        setDifficulty(4);
        break;
    }
  }

  function handleStartClick() {
    setShowSelectDifficulty(false);
  }

  difficultyLevels.forEach((level) =>
    difficultyLevelsJsx.push(
      <li
        key={level}
        id={level}
        className={selectedId === level ? 'selected' : ''}
      >
        <button className="button secondary" onClick={handleLevelClick}>
          <h3>{level}</h3>
        </button>
      </li>,
    ),
  );

  return (
    <div className="select-difficulty main-container">
      <h2>Select Difficulty</h2>
      <ul>{difficultyLevelsJsx}</ul>
      <button className="button primary" onClick={handleStartClick}>
        <h4>
          <span className="front">Start Game</span>
        </h4>
      </button>
    </div>
  );
}
