/**
 * @param {number[]} nums
 * @return {number}
 */

 // Need refactoring for better solution, added to Optimize list
 // 65% percentile runtime distribution
 
var findMaxConsecutiveOnes = function(nums) {
  let total = 0;
  let placeholder = 0;
  nums.forEach(function(number) {
    if (number === 0) {
      if (placeholder >= total) {
        total = placeholder;
        placeholder = 0;
      } else {
        placeholder = 0;
      }
    } else {
      placeholder++;
      if (placeholder >= total) {
        total = placeholder;
      }
    }
  });
  return total;
};