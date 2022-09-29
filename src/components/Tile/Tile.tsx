import "./Tile.css";

const Tile = ({ tileNumber }: { tileNumber: number }) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    >
      <img alt="pawn" src="/assets/images/pawn_b.png" />
    </span>
  );
};

export default Tile;
