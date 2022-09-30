export interface PieceType {
  piece: any;
  color: "b" | "w";
}

const ChessPiece = ({ piece = "pawn", color = "w" }: PieceType) => {
  const handleDrag = (e: any) => {
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
  };

  return (
    <img
      draggable
      onDrag={handleDrag}
      alt="pawn"
      src={`/assets/images/${piece}_${color}.png`}
    />
  );
};

export default ChessPiece;
