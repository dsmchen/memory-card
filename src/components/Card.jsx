import '../styles/Card.css';

export default function Card({ result }) {
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
    <div className="card">
      <img src={result.image} alt="" />
      <h2>{getFullName(result.fullName)}</h2>
      <ul>
        <li>Hogwarts house: {result.hogwartsHouse}</li>
        <li>Date of birth: {result.birthdate}</li>
      </ul>
    </div>
  );
}
