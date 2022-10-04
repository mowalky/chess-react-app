import "./Tile.css";
import { useState } from "react";

import ChessPiece from "../Pieces/Piece";

interface validMoves {
  boardstate?: [];
  square: string;
  piece: string;
  color: string;
}

function nextLetter(letter: string) {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
}

function prevLetter(letter: string) {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) - 1);
}

const availableMoves = ({ boardstate, square, piece, color }: validMoves) => {
  console.log(`=== checking for valid moves for ${piece} ===`);
  const y = square.charAt(0);
  const x = Number(square.charAt(1));
  let moves = [`${y}${x + 1}`, `${y}${x + 2}`];
  console.log("x", x);
  switch (piece) {
    case "pawn":
      console.log(`(${color})pawn moves from ${square}`);
      // only allow pawns to move 2 spaces at beginning
      moves = [
        `${y}${color === "b" ? x - 1 : x + 1}`,
        `${(x === 2 || x === 7) && `${y}${color === "b" ? x - 2 : x + 2}`}`,
      ];
      break;

    case "king":
      console.log(`(${color})king moves from ${square}`);
      console.log(`${prevLetter(y)}${x + 1}`);
      moves = [
        `${y}${color === "b" ? x - 1 : x + 1}`,
        `${prevLetter(y)}${x + 1}`,
        `${nextLetter(y)}${x + 1}`,
        `${nextLetter(y)}${x}`,
        `${prevLetter(y)}${x}`,
        `${prevLetter(y)}${x - 1}`,
        `${nextLetter(y)}${x - 1}`,
        `${y}${color === "b" ? x + 1 : x - 1}`,
      ];
      break;
  }

  return moves;
};

const Popup = ({ message }: { message: string }) => {
  return <div>{message}</div>;
};

const Tile = ({
  active,
  highlight,
  setHightlighMoves,
  handleTileClick,
  tile,
  tileNumber,
  piece,
  color,
}: {
  active: string;
  highlight?: string;
  setHightlighMoves: any;
  handleTileClick: (square: string) => void;
  tile: string;
  tileNumber: number;
  piece: string;
  color: "b" | "w";
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    // current square and two spaces up/or down
    if (piece) {
      const currentSquare = tile;
      const y = currentSquare.charAt(0);
      const x = Number(currentSquare.charAt(1));
      console.log(`${y}${x + 1}`);
      const moves = availableMoves({
        square: currentSquare,
        piece: piece,
        color: color,
      });
      setHightlighMoves(moves);
      handleTileClick(tile);
    }
  };

  return (
    <span
      onClick={() => handleClick()}
      className={`tile ${highlight === tile && "highlight"} ${
        active === tile && "active"
      } ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      {showPopUp && <Popup message={tile} />}
      {piece && <ChessPiece piece={piece} color={color} square={tile} />}
    </span>
  );
};

export default Tile;
