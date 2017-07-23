/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// let nums = [2, 7, 11, 15];
// let target = 13;

let nums = [3, 2, 4];
let target = 1;

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++ ) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function(nums, target) {
    const diffs = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in diffs) {
            console.log([diffs[target - nums[i]], i]);
            return [diffs[target - nums[i]], i];
        } else {
            diffs[nums[i]] = i;
            console.log(diffs);
        }
    }
};

twoSum(nums, target);