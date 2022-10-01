import "./Tile.css";

import ChessPiece from "../Pieces/Piece";

const Tile = ({
  active,
  tile,
  tileNumber,
  piece,
  color,
}: {
  active: string;
  tile: string;
  tileNumber: number;
  piece?: any;
  color?: any;
}) => {
  return (
    <span
      className={`tile ${active === tile && "active"} ${
        tileNumber % 2 === 0 ? "black-tile" : "white-tile"
      }`}
    >
      {piece && <ChessPiece piece={piece} color={color} />}
    </span>
  );
};

export default Tile;
