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
  handleTileClick: (square:string)=>void;
  tile: string;
  tileNumber: number;
  piece?: any;
  color?: any;
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    handleTileClick(tile);
  }

  return (
    <span
    onClick={() => handleClick()}
      onMouseOver={() => setShowPopUp(true)}
      onMouseOut={() => setShowPopUp(false)}
      className={`tile ${(active === tile || highlight) && "active"} ${
        tileNumber % 2 === 0 ? "black-tile" : "white-tile"
      }`}
    >
      {showPopUp && <Popup message={tile} />}
      {highlight}
      {piece && <ChessPiece piece={piece} color={color} square={tile} />}
    </span>
  );
};

export default Tile;
