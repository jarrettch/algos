/**
 * @param {string} moves
 * @return {boolean}
 */
// const moves = "UD";

var judgeCircle = function(moves) {
  let count = 0;
  // console.log(moves);
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U" || moves[i] === "R") {
      count++;
    } else {
      count--;
    }
  };
  // console.log(count);
  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

judgeCircle(moves);