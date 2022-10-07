import "./Chessboard.css";
import Tilt from "../Tile/Tile";
import { useState } from "react";

const horizontalSquares = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalSquares = [1, 2, 3, 4, 5, 6, 7, 8];

const initialSetup: any = {
  a1: { p: "rook", c: "w" },
  b1: { p: "bishop", c: "w" },
  c1: { p: "knight", c: "w" },
  d1: { p: "king", c: "w" },
  e1: { p: "queen", c: "w" },
  f1: { p: "knight", c: "w" },
  g1: { p: "bishop", c: "w" },
  h1: { p: "rook", c: "w" },
  a2: { p: "pawn", c: "w" },
  b2: { p: "pawn", c: "w" },
  c2: { p: "pawn", c: "w" },
  d2: { p: "pawn", c: "w" },
  e2: { p: "pawn", c: "w" },
  f2: { p: "pawn", c: "w" },
  g2: { p: "pawn", c: "w" },
  h2: { p: "pawn", c: "w" },
  a8: { p: "rook", c: "b" },
  b8: { p: "bishop", c: "b" },
  c8: { p: "knight", c: "b" },
  d8: { p: "king", c: "b" },
  e8: { p: "queen", c: "b" },
  f8: { p: "knight", c: "b" },
  g8: { p: "bishop", c: "b" },
  h8: { p: "rook", c: "b" },
  a7: { p: "pawn", c: "b" },
  b7: { p: "pawn", c: "b" },
  c7: { p: "pawn", c: "b" },
  d7: { p: "pawn", c: "b" },
  e7: { p: "pawn", c: "b" },
  f7: { p: "pawn", c: "b" },
  g7: { p: "pawn", c: "b" },
  h7: { p: "pawn", c: "b" },
};

export default function Chessboard() {
  const [boardState, setBoardState] = useState(initialSetup);
  const [tileFrom, setTileFrom] = useState("");
  const [tileTo, setTileTo] = useState("");
  const [activeSquare, setActiveSquare] = useState("");
  const [hightlighMoves, setHightlighMoves] = useState([]);

  const resetBoard = () => {
    setBoardState(initialSetup);
    resetTiles();
    setHightlighMoves([]);
  };

  const resetTiles = () => {
    setTileTo("");
    setTileFrom("");
    setActiveSquare("");
    setHightlighMoves([]);
  };

  const handleTileClick = (square: string) => {
    // check if piece

    // check for valid moves
    if (
      hightlighMoves.length &&
      !hightlighMoves.filter((m) => m === square)[0]
    ) {
      resetTiles();
      return;
    }

    if (square === activeSquare) {
      resetTiles();
      return;
    }

    // set as from square
    if (!activeSquare) {
      setTileFrom(square);
      setActiveSquare(square);
      console.log("setting from " + square);
      return;
    }

    const getPiece = boardState[tileFrom];
    // if from square set, set as to square
    setTileTo(square);
    console.log(getPiece.p + " to " + square);

    // move piece
    let newBoard = {
      ...boardState,
    };
    newBoard[tileFrom] = {};
    newBoard[square] = getPiece;
    setBoardState(newBoard);
    resetTiles();
  };

  const board: any = [];
  let count = verticalSquares.length;
  horizontalSquares.forEach((_, i) => {
    verticalSquares.reverse().forEach((_, j) => {
      const tileNumber = j + i + 1;
      const square = horizontalSquares[j] + count;
      let p,
        c = null;

      if (boardState[square]) {
        p = boardState[square].p;
        c = boardState[square].c;
      }

      board.push(
        <Tilt
          boardState={boardState}
          handleTileClick={handleTileClick}
          active={activeSquare}
          highlight={hightlighMoves.find((h) => h === square)}
          setHightlighMoves={setHightlighMoves}
          piece={p}
          color={c}
          key={square}
          tile={square}
          tileNumber={tileNumber}
        />
      );
    });
    count--;
  });

  return (
    <>
      <button>
        from:{tileFrom} - to:{tileTo}
      </button>
      <div id="chessboard">{board}</div>
      <button onClick={() => resetBoard()}>reset</button>
    </>
  );
}
