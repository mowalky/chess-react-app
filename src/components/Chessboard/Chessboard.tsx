import "./Chessboard.css";
import Tilt from "../Tile/Tile";

const horizontalSquares = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalSquares = [1, 2, 3, 4, 5, 6, 7, 8];

const topSetup: any = {
  a1: "rook",
  b1: "bishop",
  c1: "knight",
  d1: "king",
  e1: "queen",
  f1: "knight",
  g1: "bishop",
  h1: "rook",
  a2: "pawn",
  b2: "pawn",
  c2: "pawn",
  d2: "pawn",
  e2: "pawn",
  f2: "pawn",
  g2: "pawn",
  h2: "pawn",
};

export default function Chessboard() {
  const board: any = [];
  let count = verticalSquares.length;
  horizontalSquares.forEach((_, i) => {
    verticalSquares.reverse().forEach((_, j) => {
      const tileNumber = j + i + 1;
      const square = horizontalSquares[j] + count;
      board.push(
        <Tilt
          piece={topSetup[square]}
          key={square}
          tile={square}
          tileNumber={tileNumber}
        />
      );
    });
    count--;
  });

  return <div id="chessboard">{board}</div>;
}
