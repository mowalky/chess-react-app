export function nextLetter(letter: string) {
  const nextLetter = String.fromCharCode(
    letter.charCodeAt(letter.length - 1) + 1
  );

  return nextLetter.toUpperCase() !== nextLetter.toLowerCase()
    ? nextLetter
    : "";
}

export function prevLetter(letter: string) {
  const prevLetter = String.fromCharCode(
    letter.charCodeAt(letter.length - 1) - 1
  );
  return prevLetter.toUpperCase() !== prevLetter.toLowerCase()
    ? prevLetter
    : "";
}

function currLetter(number: number) {
  return String.fromCharCode(94 + (number + 3));
}

export function fen(fen: string) {
  //const test = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

  const pieces: { r: string; n: string } = {
    r: "rook",
    n: "knight",
  };

  // convert to FEN format

  const boardState: any = {};

  // split FEND string into rows
  const rows = fen.split("/");

  rows.forEach((row: any, idx: number) => {
    //console.log(row);
    console.log("row", currLetter(idx));
    for (let square in row) {
      let sq = row[square];
      if (sq === "r") {
        boardState[`${currLetter(idx)}${+square + 1}`] = {
          p: "rook",
          c: "b",
        };
      }
      if (sq === "R") {
        boardState[`${currLetter(idx)}${+square + 1}`] = {
          p: "rook",
          c: "W",
        };
      }
      if (sq === "b") {
        boardState[`${currLetter(idx)}${+square + 1}`] = {
          p: "bishop",
          c: "b",
        };
      }
      if (sq === "B") {
        boardState[`${currLetter(idx)}${+square + 1}`] = {
          p: "bishop",
          c: "W",
        };
      }
    }
  });

  console.log(boardState);

  // convert back
}
