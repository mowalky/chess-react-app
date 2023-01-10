import { nextLetter, prevLetter } from "./utils";

const kingMoves = (x: number, y: string, color: string) => {
  return [
    `${y}${color === "b" ? x - 1 : x + 1}`,
    `${prevLetter(y)}${x + 1}`,
    `${nextLetter(y)}${x + 1}`,
    `${nextLetter(y)}${x}`,
    `${prevLetter(y)}${x}`,
    `${prevLetter(y)}${x - 1}`,
    `${nextLetter(y)}${x - 1}`,
    `${y}${color === "b" ? x + 1 : x - 1}`,
  ];
};

const isKingInCheck = (x: number, y: string, color: string, board: Board) => {
  const kingMoves = [
    `${y}${color === "b" ? x - 1 : x + 1}`,
    `${prevLetter(y)}${x + 1}`,
    `${nextLetter(y)}${x + 1}`,
    `${nextLetter(y)}${x}`,
    `${prevLetter(y)}${x}`,
    `${prevLetter(y)}${x - 1}`,
    `${nextLetter(y)}${x - 1}`,
    `${y}${color === "b" ? x + 1 : x - 1}`,
  ];

  for (const move of kingMoves) {
    if (board[move] && board[move].color !== color) {
      return true;
    }
  }

  return false;
};

export default kingMoves;
