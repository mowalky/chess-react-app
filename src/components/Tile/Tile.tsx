import "./Tile.css";

import ChessPiece from "../Pieces/Piece";

const Tile = ({
  tile,
  tileNumber,
  piece,
}: {
  tile: string;
  tileNumber: number;
  piece?: any;
}) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      {piece && <ChessPiece piece={piece} color="b" />}
    </span>
  );
};

export default Tile;
