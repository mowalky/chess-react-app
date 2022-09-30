import "./Tile.css";

import ChessPiece from "../Pieces/Piece";

const Tile = ({
  tile,
  tileNumber,
  piece,
  color,
}: {
  tile: string;
  tileNumber: number;
  piece?: any;
  color?: any;
}) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      {piece && <ChessPiece piece={piece} color={color} />}
    </span>
  );
};

export default Tile;
