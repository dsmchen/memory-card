import '../styles/Gameboard.css';
import useData from '../hooks/useData';
import Card from './Card';

export default function Gameboard() {
  const url = 'https://potterapi-fedeperin.vercel.app/en/characters?max=20';
  const results = useData(url);
  const cards = [];

  if (results) {
    for (const result of results) {
      cards.push(<Card result={result} key={result.fullName} />);
    }
  }

  return (
    <main>
      {!results && <h2 className="loading">Loading...</h2>}
      {results && cards}
    </main>
  );
}
