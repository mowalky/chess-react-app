import { useState } from "react";

export interface PieceType {
  piece: any;
  color: "b" | "w";
  square: string;
}

const Popup = ({ message }: { message: string }) => {
  return <div>{message}</div>;
};

const ChessPiece = ({ piece = "pawn", color = "w", square }: PieceType) => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div>
      <img alt={piece} src={`/assets/images/${piece}_${color}.png`} />
    </div>
  );
};

export default ChessPiece;
