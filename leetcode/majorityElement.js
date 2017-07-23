// let nums = [1, 2, 3, 3, 3, 5, 6, 3, 3, 3, 3];
// let nums = [6, 5, 5];
let nums = [8, 8, 7, 7, 7];

var majorityElement = function(nums) {
  if (nums.length == 1) return nums[0];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
      if (map[nums[i]] > nums.length/2) {
        return nums[i];
      }
    } else {
      map[nums[i]] = 1;
    }
  }
};

majorityElement(nums);