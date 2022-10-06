import { nextLetter, prevLetter } from "./utils";

const knightMoves = (x: number, y: string, color: string) => {
  return [
    `${prevLetter(y)}${x + 2}`,
    `${nextLetter(y)}${x + 2}`,
    `${nextLetter(nextLetter(y))}${x + 1}`,
    `${prevLetter(prevLetter(y))}${x + 1}`,
    `${prevLetter(y)}${x - 2}`,
    `${nextLetter(y)}${x - 2}`,
    `${nextLetter(nextLetter(y))}${x - 1}`,
    `${prevLetter(prevLetter(y))}${x - 1}`,
  ];
};

export default knightMoves;
