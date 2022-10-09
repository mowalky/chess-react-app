import { nextLetter, prevLetter } from "./utils";

const rookMoves = (x: number, y: string, color: string) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preletter = y;

  values.forEach((v, i) => {
    moves.push(`${y}${x + v}`);
    moves.push(`${nextLetter(curLetter)}${x}`);
    moves.push(`${y}${x - (i + 1)}`);
    console.log(`${prevLetter(preletter)}${x}`);
    moves.push(`${prevLetter(preletter)}${x}`);
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
