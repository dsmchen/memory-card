import '../styles/Card.css';

export default function Card({
  result,
  selectedCards,
  setSelectedCards,
  setIsGameOver,
}) {
  function handleClick(e) {
    const cardId = e.target.closest('.card').id;
    if (selectedCards.includes(cardId)) {
      setIsGameOver(true);
    } else {
      setSelectedCards([...selectedCards, cardId]);
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
      <h2>{getFullName(result.fullName)}</h2>
    </div>
  );
}
