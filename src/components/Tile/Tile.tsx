import "./Tile.css";
import { useState } from "react";

import ChessPiece from "../Pieces/Piece";

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
  piece?: any;
  color?: any;
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    // current square and two spaces up/or down

    const currentSquare = tile;
    const y = currentSquare.charAt(0);
    const x = Number(currentSquare.charAt(1));
    console.log(`${y}${x + 1}`);
    setHightlighMoves([`${y}${x + 1}`, `${y}${x + 2}`]);
    handleTileClick(tile);
  };

  return (
    <span
      onClick={() => handleClick()}
      onMouseOver={() => setShowPopUp(true)}
      onMouseOut={() => setShowPopUp(false)}
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
