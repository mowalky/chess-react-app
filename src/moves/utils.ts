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

  const pieces: any = {
    r: "rook",
    n: "knight",
    b: "bishop",
    q: "queen",
    k: "king",
    p: "pawn",
  };

  // convert to FEN format
  const boardState: any = {};
  // split FEND string into rows
  const rows = fen.split("/");

  rows.reverse().forEach((row: any, idx: number) => {
    let i = 0;
    idx++;

    for (let square in row) {
      let sq = row[square];
      if (+sq) {
        i = +sq + i;
      } else {
        let color = sq === sq.toUpperCase() ? "w" : "b";
        boardState[`${currLetter(i)}${idx}`] = {
          p: pieces[sq.toLowerCase()],
          c: color,
        };
        i++;
      }
    }
  });

  console.log(boardState);
  return boardState;

  // convert back
}
