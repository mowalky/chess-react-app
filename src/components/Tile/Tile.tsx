import "./Tile.css";

import Pawn from "../Pieces/Pawn";

const Tile = ({ tileNumber }: { tileNumber: number }) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      <Pawn color={tileNumber % 2 === 0 ? "w" : "b"} />
    </span>
  );
};

export default Tile;
