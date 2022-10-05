const pawnMoves = (x: number, y: string, color: string) => {
  // only allow pawns to move 2 spaces at beginning
  return [
    `${y}${color === "b" ? x - 1 : x + 1}`,
    `${(x === 2 || x === 7) && `${y}${color === "b" ? x - 2 : x + 2}`}`,
  ];
};

export default pawnMoves;
