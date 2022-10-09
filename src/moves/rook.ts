import { nextLetter, prevLetter } from "./utils";

const rookMoves = (x: number, y: string, color: string, board?: any) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preletter = y;

  // piece vision
  let stopLeft = false;
  let stopRight = false;
  let stopUp = false;
  let stopDown = false;
  let stopLeftTopDiag = false;
  let stopRightTopDiag = false;
  let stopLeftBotDiag = false;
  let stopRightBotDiag = false;

  values.forEach((v, i) => {
    if (!stopUp) {
      moves.push(`${y}${x + v}`);
      if (board[`${y}${x + v}`]?.p) stopUp = true;
    }
    moves.push(`${nextLetter(curLetter)}${x}`);
    moves.push(`${y}${x - (i + 1)}`);

    if (!stopLeft) {
      moves.push(`${prevLetter(preletter)}${x}`);
      if (board[`${prevLetter(preletter)}${x}`]?.p) stopLeft = true;
    }
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
