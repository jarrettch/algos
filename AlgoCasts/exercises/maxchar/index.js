// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  map = {}
  for (let char of str) {
    map[char]  = map[char] + 1 || 1
  }
  // console.log(map)
  return Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b)
}

module.exports = maxChar;
