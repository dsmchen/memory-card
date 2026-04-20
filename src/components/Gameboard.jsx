import '../styles/Gameboard.css';
import useData from '../hooks/useData';
import shuffle from '../utils/shuffle';
import Card from './Card';
import Scoreboard from './Scoreboard';

export default function Gameboard({
  difficulty,
  selectedCards,
  setSelectedCards,
  setIsGameOver,
  setIsWin,
  highestScore,
  setHighestScore,
}) {
  const url = `https://potterapi-fedeperin.vercel.app/en/characters?max=${difficulty}`;
  const { data: results, error, loading } = useData(url);
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
          setIsWin={setIsWin}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
          difficulty={difficulty}
        />,
      );
    }
  }

  return (
    <div className="gameboard">
      {(error || loading) && (
        <div className="heading-container">
          {loading && <h2 className="loading">Loading...</h2>}
          {error && (
            <>
              <h2>Sorry, something went wrong.</h2>
              <p>Please try again later.</p>
            </>
          )}
        </div>
      )}
      {results && (
        <>
          <Scoreboard
            selectedCards={selectedCards}
            highestScore={highestScore}
          />
          {cards}
        </>
      )}
    </div>
  );
}
