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
    const cardId = e.target.closest('.tilt-container').id;
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

  function formatName(fullName) {
    switch (fullName) {
      case 'Harry James Potter':
        fullName = 'Harry Potter';
        break;
      case 'Hermione Jean Granger':
        fullName = 'Hermione Granger';
        break;
      case 'Albus Percival Wulfric Brian Dumbledore':
        fullName = 'Albus Dumbledore';
        break;
    }

    fullName = fullName.split(' ');

    return fullName;
  }

  const formattedName = formatName(result.fullName);

  return (
    <div className="tilt-container" id={result.index} onClick={handleClick}>
      <div className="zone top-left"></div>
      <div className="zone top-right"></div>
      <div className="zone bottom-left"></div>
      <div className="zone bottom-right"></div>
      <div className="zone top-middle"></div>
      <div className="zone bottom-middle"></div>
      <div className="card">
        <img src={result.image} alt="" />
        <div className="text">
          <h2>
            {formattedName[0]}
            <br />
            {formattedName[1]}
          </h2>
        </div>
      </div>
    </div>
  );
}
