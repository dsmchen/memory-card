import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import GameOver from './components/GameOver';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [highestScore, setIsHighestScore] = useState(0);

  return (
    <>
      <Header />
      {!isGameOver ? (
        <>
          <Scoreboard
            selectedCards={selectedCards}
            highestScore={highestScore}
          />
          <Gameboard
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
        />
      )}
    </>
  );
}

export default App;
