import "./Tile.css";

const Tile = ({ tileNumber }: { tileNumber: number }) => {
  return (
    <span
      className={`tile ${tileNumber % 2 === 0 ? "black-tile" : "white-tile"}`}
    ></span>
  );
};

export default Tile;
