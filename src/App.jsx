import { useState } from 'react';
import './App.css';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    
    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  let status;
  let winner = calculateWinner(squares);

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <h1>{ status }</h1>
      <div>
        <div className='row'>
          <button className="square" onClick={() => handleClick(0)}>{ squares[0] }</button>
          <button className="square" onClick={() => handleClick(1)}>{ squares[1] }</button>
          <button className="square" onClick={() => handleClick(2)}>{ squares[2] }</button>
        </div>
        <div className='row'>
          <button className="square" onClick={() => handleClick(3)}>{ squares[3] }</button>
          <button className="square" onClick={() => handleClick(4)}>{ squares[4] }</button>
          <button className="square" onClick={() => handleClick(5)}>{ squares[5] }</button>
        </div>
        <div className='row'>
          <button className="square" onClick={() => handleClick(6)}>{ squares[6] }</button>
          <button className="square" onClick={() => handleClick(7)}>{ squares[7] }</button>
          <button className="square" onClick={() => handleClick(8)}>{ squares[8] }</button>
        </div>
      </div>
    </>
  )
}

export default App;