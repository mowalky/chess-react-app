import "./Tile.css";
import { useState } from "react";

import ChessPiece from "../Pieces/Piece";

// moves by piece
import bishopMoves from "../../moves/bishop";
import pawnMoves from "../../moves/pawn";
import rookMoves from "../../moves/rook";
import kingMoves from "../../moves/king";
import knightMoves from "../../moves/knight";
import queenMoves from "../../moves/queen";

interface validMoves {
  boardState?: any;
  square: string;
  piece: string;
  color: string;
}

const availableMoves = ({ boardState, square, piece, color }: validMoves) => {
  console.log(`=== checking for valid moves for ${piece} ===`);

  const checkSquareForPiece = (moves: string[]) => {
    let validMoves: string[] = [];
    console.log(moves);
    moves.forEach((move: any) => {
      console.log(`${move} - ${boardState[move]}`);
      if (!boardState[move]?.p) validMoves.push(move);
    });
    return validMoves;
  };

  const y = square.charAt(0);
  const x = Number(square.charAt(1));
  let moves = [`${y}${x + 1}`, `${y}${x + 2}`];
  console.log("x", x);
  switch (piece) {
    case "bishop":
      console.log(`(${color})bishop moves from ${square}`);
      moves = bishopMoves(x, y, color);
      break;
    case "king":
      console.log(`(${color})king moves from ${square}`);
      moves = checkSquareForPiece(kingMoves(x, y, color));
      break;
    case "knight":
      console.log(`(${color})knight moves from ${square}`);
      moves = knightMoves(x, y, color);
      break;
    case "rook":
      console.log(`(${color})rook moves from ${square}`);
      moves = rookMoves(x, y, color);
      break;
    case "pawn":
      console.log(`(${color})pawn moves from ${square}`);
      moves = checkSquareForPiece(pawnMoves(x, y, color));
      break;
    case "queen":
      console.log(`(${color})bishop moves from ${square}`);
      moves = queenMoves(x, y, color);
      break;
  }

  return moves;
};

const Popup = ({ message }: { message: string }) => {
  return <div>{message}</div>;
};

const Tile = ({
  boardState,
  active,
  highlight,
  setHightlighMoves,
  handleTileClick,
  tile,
  tileNumber,
  piece,
  color,
}: {
  boardState: {};
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
    //  only if tile has a piece or is highlighed as a valid move
    if (piece || highlight) {
      const currentSquare = tile;
      const y = currentSquare.charAt(0);
      const x = Number(currentSquare.charAt(1));
      console.log(`${y}${x + 1}`);
      const moves = availableMoves({
        boardState: boardState,
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
