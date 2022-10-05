import rookMoves from "./rook";
import bishopMoves from "./bishop";

const queenMoves = (x: number, y: string, color: string) => {
  return [...rookMoves(x, y, color), ...bishopMoves(x, y, color)];
};

export default queenMoves;
