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
  tile,
  tileNumber,
  piece,
  color,
}: {
  active: string;
  highlight?: string;
  setHightlighMoves: any;
  tile: string;
  tileNumber: number;
  piece?: any;
  color?: any;
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <span
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
