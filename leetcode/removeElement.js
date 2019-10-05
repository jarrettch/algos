/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [3,2,2,3];
const val = 3;

var removeElement = function(nums, val) {
  let j = nums.length;
  let i = 0;
  while (i < j) {
    if (nums[i] === val) {
      nums[i] === nums[j - 1]
      nums.splice(i, 1)
      j--;
    } else {
      i++;
    }
  }
  console.log(nums.length)
};

removeElement(nums, val)