import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import GameOver from './components/GameOver';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <>
      <Header />
      {!isGameOver ? (
        <>
          <Scoreboard selectedCards={selectedCards} />
          <Gameboard
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            setIsGameOver={setIsGameOver}
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
