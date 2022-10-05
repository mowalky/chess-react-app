export function nextLetter(letter: string) {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
}

export function prevLetter(letter: string) {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) - 1);
}
