/**
 * @param {string} s
 * @return {number}
 */

 let s = "MXXIV";

var romanToInt = function(s) {
  const numerals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let total = 0
  let numberArr = s.split('')
  numberArr.forEach((n, i) => {
    if (numerals[numberArr[i + 1]] > numerals[n]) {
      total -= numerals[n]
    } else {
      total += numerals[n]
    }
  });
  console.log(total)
  return total
};

romanToInt(s)