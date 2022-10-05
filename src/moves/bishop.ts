import { nextLetter, prevLetter } from "./utils";

const bishopMoves = (x: number, y: string, color: string) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preLetter = y;
  let curLetter2 = y;
  let preLetter2 = y;
  values.forEach((v, i) => {
    moves.push(`${nextLetter(curLetter)}${x + (i + 1)}`);
    curLetter = nextLetter(curLetter);
    moves.push(`${prevLetter(preLetter)}${x + (i + 1)}`);
    preLetter = prevLetter(preLetter);

    moves.push(`${nextLetter(curLetter2)}${x - (i + 1)}`);
    curLetter2 = nextLetter(curLetter2);
    moves.push(`${prevLetter(preLetter2)}${x - (i + 1)}`);
    preLetter2 = prevLetter(preLetter2);
  });

  //let moves = [`${nextLetter(y)}${x + 1}`, `${prevLetter(y)}${x + 1}`];
  return moves;
};

export default bishopMoves;
