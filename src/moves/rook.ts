import { nextLetter, prevLetter } from "./utils";

const rookMoves = (x: number, y: string, color: string) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves = values.map((a) => `${y}${color === "b" ? x - a : x + a}`);
  let curLetter = y;
  let preletter = y;

  values.forEach((v, i) => {
    console.log(x);
    moves.push(`${nextLetter(curLetter)}${x}`);
    moves.push(`${y}${x - (i + 1)}`);
    moves.push(`${prevLetter(preletter)}${x}`);
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
