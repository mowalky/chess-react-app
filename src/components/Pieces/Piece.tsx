const ChessPiece = ({
  piece = "pawn",
  color = "w",
}: {
  piece: "pawn" | "king" | "queen" | "rook" | "knight" | "bishop" | "rook";
  color: "b" | "w";
}) => {
  return <img alt="pawn" src={`/assets/images/${piece}_${color}.png`} />;
};

export default ChessPiece;
