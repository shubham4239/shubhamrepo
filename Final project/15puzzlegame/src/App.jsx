import React, { useState } from "react";
import "./App.css";

const generateShuffledTiles = () => {
  const tiles = [...Array(15).keys()].map(x => x + 1);
  tiles.push(null);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  return tiles;
};
const App = () => {
  const [tiles, setTiles] = useState(generateShuffledTiles());
  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null);
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;
    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);
    if (isAdjacent) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
    }
  };
  const handleNewGame = () => {
    setTiles(generateShuffledTiles());
  };
  return (
    <div className="app">
      <h1 className="title">15 Puzzle Game</h1>
      <div className="grid">
        {tiles.map((tile, i) => {
          const isCorrect = tile === i + 1;
          return (
            <div
              key={i}
              className={`tile ${tile === null ? "empty" : ""} ${isCorrect ? "correct" : ""}`}
              onClick={() => moveTile(i)}
            >
              {tile}
            </div>
          );
        })}
      </div>
      <button className="new-game" onClick={handleNewGame}>New Game</button>
    </div>
  );
};

export default App;
