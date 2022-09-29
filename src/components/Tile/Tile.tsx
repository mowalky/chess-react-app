import "./Tile.css";

import ChessPiece from "../Pieces/Piece";

const Tile = ({ tileNumber }: { tileNumber: number }) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      <ChessPiece p="king" />
    </span>
  );
};

export default Tile;
