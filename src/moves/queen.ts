import rookMoves from "./rook";
import bishopMoves from "./bishop";

const queenMoves = (x: number, y: string, color: string, board?: any) => {
  return [...rookMoves(x, y, color, board), ...bishopMoves(x, y, color, board)];
};

export default queenMoves;
