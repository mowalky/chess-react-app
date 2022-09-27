import React from "react";
import "./Chessboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard() {
  const board: any = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
      const tileNumber = j + i + 2;
      board.push(
        <span
          className={`tile ${
            tileNumber % 2 === 0 ? "black-tile" : "white-tile"
          }`}
        ></span>
      );
    }
  }

  return <div id="chessboard">{board}</div>;
}
