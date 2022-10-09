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
    if (!WEST) {
      moves.push(`${y}${x + v}`);
      if (board[`${y}${x + v}`]?.p) WEST = true;
    }
    if (!EAST) {
      moves.push(`${nextLetter(curLetter)}${x}`);
      if (board[`${nextLetter(curLetter)}${x}`]?.p) EAST = true;
    }

    if (!SOUTH) {
      moves.push(`${y}${x - (i + 1)}`);
      if (board[`${y}${x - (i + 1)}`]?.p) SOUTH = true;
    }

    if (!NORTH) {
      moves.push(`${prevLetter(preletter)}${x}`);
      if (board[`${prevLetter(preletter)}${x}`]?.p) NORTH = true;
    }
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
