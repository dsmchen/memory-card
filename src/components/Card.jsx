import '../styles/Card.css';

export default function Card({
  result,
  selectedCards,
  setSelectedCards,
  setIsGameOver,
  setIsWin,
  highestScore,
  setHighestScore,
  difficulty,
}) {
  function getHighestScore(num) {
    const currentScore = selectedCards.length + num;
    setHighestScore(currentScore > highestScore ? currentScore : highestScore);
  }

  function handleClick(e) {
    const cardId = e.target.closest('.card').id;
    if (selectedCards.includes(cardId)) {
      setIsGameOver(true);
      getHighestScore(0);
    } else {
      setSelectedCards([...selectedCards, cardId]);
      if (selectedCards.length + 1 === difficulty) {
        setIsGameOver(true);
        setIsWin(true);
        getHighestScore(1);
      }
    }
  }

  function getFullName(fullName) {
    switch (fullName) {
      case 'Harry James Potter':
        return 'Harry Potter';
      case 'Hermione Jean Granger':
        return 'Hermione Granger';
      case 'Albus Percival Wulfric Brian Dumbledore':
        return 'Albus Dumbledore';
      default:
        return fullName;
    }
  }

  return (
    <div className="card" id={result.index} onClick={handleClick}>
      <img src={result.image} alt="" />
      <div className="text">
        <h2>{getFullName(result.fullName)}</h2>
      </div>
    </div>
  );
}
