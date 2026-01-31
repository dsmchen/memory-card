import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SelectDifficulty from './components/SelectDifficulty';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import GameOver from './components/GameOver';

function App() {
  const [showSelectDifficulty, setShowSelectDifficulty] = useState(true);
  const [difficulty, setDifficulty] = useState(4);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highestScore, setIsHighestScore] = useState(0);

  return (
    <>
      <Header />
      <main>
        {showSelectDifficulty ? (
          <SelectDifficulty
            setDifficulty={setDifficulty}
            setShowSelectDifficulty={setShowSelectDifficulty}
          />
        ) : !isGameOver ? (
          <>
            <Scoreboard
              selectedCards={selectedCards}
              highestScore={highestScore}
            />
            <Gameboard
              difficulty={difficulty}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              setIsGameOver={setIsGameOver}
              highestScore={highestScore}
              setIsHighestScore={setIsHighestScore}
            />
          </>
        ) : (
          <GameOver
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            setIsGameOver={setIsGameOver}
            setShowSelectDifficulty={setShowSelectDifficulty}
          />
        )}
      </main>
    </>
  );
}

export default App;
