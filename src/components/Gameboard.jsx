import '../styles/Gameboard.css';
import useData from '../hooks/useData';
import shuffle from '../utils/shuffle';
import Card from './Card';

export default function Gameboard({
  difficulty,
  selectedCards,
  setSelectedCards,
  setIsGameOver,
  highestScore,
  setIsHighestScore,
}) {
  const url = `https://potterapi-fedeperin.vercel.app/en/characters?max=${difficulty}`;
  const results = useData(url);
  const cards = [];

  if (results) {
    shuffle(results);
    for (const result of results) {
      cards.push(
        <Card
          result={result}
          key={result.index}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          setIsGameOver={setIsGameOver}
          highestScore={highestScore}
          setIsHighestScore={setIsHighestScore}
        />,
      );
    }
  }

  return (
    <div className="gameboard">
      {!results ? (
        <div className="heading-container">
          <h2 className="loading">Loading...</h2>
        </div>
      ) : (
        <>{cards}</>
      )}
    </div>
  );
}
