import { nextLetter, prevLetter } from "./utils";

const rookMoves = (x: number, y: string, color: string, board?: any) => {
  const values = Array.from({ length: 8 }, (_, i) => i + 1);
  let moves: any = [];
  let curLetter = y;
  let preletter = y;

  // piece vision
  let NORTH = false;
  let EAST = false;
  let WEST = false;
  let SOUTH = false;

  values.forEach((v, i) => {
    let moveW = `${y}${x + v}`;
    let moveE = `${nextLetter(curLetter)}${x}`;
    let moveS = `${y}${x - (i + 1)}`;
    let moveN = `${prevLetter(preletter)}${x}`;

    if (!WEST) {
      moves.push(moveW);
      if (board[moveW]?.p) WEST = true;
    }
    if (!EAST) {
      moves.push(moveE);
      if (board[moveE]?.p) EAST = true;
    }

    if (!SOUTH) {
      moves.push(moveS);
      if (board[moveS]?.p) SOUTH = true;
    }

    if (!NORTH) {
      moves.push(moveN);
      if (board[moveN]?.p) NORTH = true;
    }
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
