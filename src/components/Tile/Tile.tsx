import "./Tile.css";

import ChessPiece from "../Pieces/Piece";

const Tile = ({ tile, tileNumber }: { tile: string; tileNumber: number }) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      {tile}
    </span>
  );
};

export default Tile;
