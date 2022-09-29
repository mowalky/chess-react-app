import "./Chessboard.css";
import Tilt from "../Tile/Tile";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard() {
  const board: any = [];

  horizontalAxis.forEach((_, i) => {
    verticalAxis.reverse().forEach((_, j) => {
      const tileNumber = j + i + 2;
      board.push(<Tilt tileNumber={tileNumber} />);
    });
  });

  return <div id="chessboard">{board}</div>;
}
