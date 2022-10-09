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
