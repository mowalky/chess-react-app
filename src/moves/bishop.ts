import { nextLetter, prevLetter } from "./utils";

const bishopMoves = (x: number, y: string, color: string, board?: any) => {
  //  piece check/stop
  let NORTHWEST = false;
  let NORTHEAST = false;
  let SOUTHWEST = false;
  let SOUTHEAST = false;

  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preLetter = y;
  values.forEach((_, i) => {
    let moveNE = `${nextLetter(curLetter)}${x + (i + 1)}`;
    let moveSE = `${nextLetter(curLetter)}${x - (i + 1)}`;
    let moveNW = `${prevLetter(preLetter)}${x + (i + 1)}`;
    let moveSW = `${prevLetter(preLetter)}${x - (i + 1)}`;

    if (!NORTHEAST) {
      moves.push(moveNE);
      if (board[moveNE]?.p) NORTHEAST = true;
    }
    if (!SOUTHEAST) {
      moves.push(moveSE);
      if (board[moveSE]?.p) SOUTHEAST = true;
    }
    if (!NORTHWEST) {
      moves.push(moveNW);
      if (board[moveNW]?.p) NORTHWEST = true;
    }
    if (!SOUTHWEST) {
      moves.push(moveSW);
      if (board[moveSW]?.p) SOUTHWEST = true;
    }

    curLetter = nextLetter(curLetter);
    preLetter = prevLetter(preLetter);
  });
  return moves;
};

export default bishopMoves;
