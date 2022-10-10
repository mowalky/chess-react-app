const pawnMoves = (x: number, y: string, color: string, board?: any) => {
  let firstPawnMove = `${y}${color === "b" ? x - 2 : x + 2}`;
  let nextPawnMove = `${y}${color === "b" ? x - 1 : x + 1}`;
  return [
    nextPawnMove,
    // only allow pawns to move 2 spaces at beginning
    `${(x === 2 || x === 7) && !board[nextPawnMove]?.p && firstPawnMove}`,
  ];
};

export default pawnMoves;
