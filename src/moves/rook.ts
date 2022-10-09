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
      let move = `${y}${x + v}`;
      moves.push(move);
      if (board[move]?.p) WEST = true;
    }
    if (!EAST) {
      let move = `${nextLetter(curLetter)}${x}`;
      moves.push(move);
      if (board[move]?.p) EAST = true;
    }

    if (!SOUTH) {
      let move = `${y}${x - (i + 1)}`;
      moves.push(move);
      if (board[move]?.p) SOUTH = true;
    }

    if (!NORTH) {
      let move = `${prevLetter(preletter)}${x}`;
      moves.push(move);
      if (board[move]?.p) NORTH = true;
    }
    curLetter = nextLetter(curLetter);
    preletter = prevLetter(preletter);
  });

  return moves;
};

export default rookMoves;
