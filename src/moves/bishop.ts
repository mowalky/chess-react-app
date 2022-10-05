import { nextLetter, prevLetter } from "./utils";

const bishopMoves = (x: number, y: string, color: string) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preLetter = y;
  values.forEach((_, i) => {
    moves.push(`${nextLetter(curLetter)}${x + (i + 1)}`);
    moves.push(`${nextLetter(curLetter)}${x - (i + 1)}`);
    curLetter = nextLetter(curLetter);
    moves.push(`${prevLetter(preLetter)}${x + (i + 1)}`);
    moves.push(`${prevLetter(preLetter)}${x - (i + 1)}`);
    preLetter = prevLetter(preLetter);
  });
  return moves;
};

export default bishopMoves;
