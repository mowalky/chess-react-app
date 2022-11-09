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

  // convert to FEN format

  const boardState = { a1: { p: "rook", c: "w" } };

  // split FEND string into rows
  const rows = fen.split("/");

  rows.forEach((row: any, idx: number) => {
    //console.log(row);
    console.log("row", currLetter(idx));
  });

  // convert back
}
