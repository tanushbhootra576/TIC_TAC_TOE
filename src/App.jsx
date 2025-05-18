

import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import WinnerModal from "./components/WinnerModal";
import { checkWinner } from "./helper";
import "./index.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [winner, setWinner] = useState(null);

  function handleSelectSquare(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] || winner) return;

    const updatedBoard = gameBoard.map(row => [...row]);
    updatedBoard[rowIndex][colIndex] = activePlayer;

    setGameBoard(updatedBoard);
    setGameTurns(prev => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prev,
    ]);

    const result = checkWinner(updatedBoard);
    if (result) {
      setWinner(result);
    } else {
      setActivePlayer(prev => (prev === "X" ? "O" : "X"));
    }
  }

  function handleRestart() {
    setGameBoard(initialGameBoard);
    setGameTurns([]);
    setActivePlayer("X");
    setWinner(null);
  }

  function handleNameChange(symbol, newName) {
    setPlayers(prev => ({ ...prev, [symbol]: newName }));
  }

  const winnerName = winner === "Draw" ? "Draw" : players[winner];

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={name => handleNameChange("X", name)}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={name => handleNameChange("O", name)}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
      {winner && (
        <WinnerModal
          winner={winnerName}
          onReset={handleRestart}
        />
      )}
    </>
  );
}

export default App;
