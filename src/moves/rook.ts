import { nextLetter, prevLetter } from "./utils";

const rookMoves = (x: number, y: string, color: string, board?: any) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preletter = y;

  values.forEach((v, i) => {
    let moveW = `${y}${x + v}`;
    if (!board[moveW]?.p) {
      moves.push(moveW);
    }

    let moveE = `${nextLetter(curLetter)}${x}`;
    if (!board[moveE]?.p) {
      moves.push(moveE);
    }

    let moveS = `${y}${x - (i + 1)}`;
    if (!board[moveS]?.p) {
      moves.push(moveS);
    }

    let moveN = `${prevLetter(preletter)}${x}`;
    if (!board[moveN]?.p) {
      moves.push(moveN);
    }

    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
