import { nextLetter, prevLetter } from "./utils";

const bishopMoves = (x: number, y: string, color: string) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preletter = y;
  values.forEach((v, i) => {
    moves.push(`${nextLetter(curLetter)}${x + (i + 1)}`);
    curLetter = nextLetter(curLetter);
    moves.push(`${prevLetter(preletter)}${x + (i + 1)}`);
    preletter = prevLetter(preletter);
  });
  //let moves = [`${nextLetter(y)}${x + 1}`, `${prevLetter(y)}${x + 1}`];
  return moves;
};

export default bishopMoves;
