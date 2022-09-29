const ChessPiece = ({ p = "pawn", c = "w" }) => {
  return <img alt="pawn" src={`/assets/images/${p}_${c}.png`} />;
};

export default ChessPiece;
