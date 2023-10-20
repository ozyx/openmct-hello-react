import React from 'react';
import './index.css';

const SIZE = 3;

function TicTacToe() {
  const [board, setBoard] = React.useState(Array(SIZE).fill(null).map(() => Array(SIZE).fill(null)));
  const [currentPlayer, setCurrentPlayer] = React.useState('X');
  const [winner, setWinner] = React.useState(null);

  const checkWinner = (board) => {
    // Check rows, columns and diagonals
    for (let i = 0; i < SIZE; i++) {
      if (board[i][0] && board[i].every(cell => cell === board[i][0])) return board[i][0];
      if (board[0][i] && board.every(row => row[i] === board[0][i])) return board[0][i];
    }
    if (board[0][0] && board.every((row, index) => row[index] === board[0][0])) return board[0][0];
    if (board[0][SIZE-1] && board.every((row, index) => row[SIZE-1-index] === board[0][SIZE-1])) return board[0][SIZE-1];
    return null;
  };

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map((r, rIndex) => 
        rIndex === row ? r.map((c, cIndex) => cIndex === col ? currentPlayer : c) : r
      );
      
      const winnerCheck = checkWinner(newBoard);
      if (winnerCheck) {
        setWinner(winnerCheck);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
      setBoard(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(Array(SIZE).fill(null).map(() => Array(SIZE).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="TicTacToe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell" onClick={() => handleClick(rowIndex, cellIndex)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner ? <div className="winner">Winner: {winner}</div> : <div>Current Player: {currentPlayer}</div>}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default TicTacToe;
