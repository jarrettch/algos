let nums = [1,3];
let target = 0;

let searchInsert = function(nums, target) {
  let lastIndex = nums.length - 1;
  let i = 0;
  // console.log(nums[length]);
  if (target > nums[lastIndex]) {
    i = nums.length;
  }
  for (let j = 0; j < nums.length; j++) {
    if (target <= nums[j]) {
      i = j;
      // console.log(i);
    }
  }
  console.log(i);
  return i;
};

searchInsert(nums, target);