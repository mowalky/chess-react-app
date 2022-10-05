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

export default kingMoves;
