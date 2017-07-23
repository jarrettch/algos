let numbers = [1, 1, 1];
let removeDuplicates = function(nums) {
  console.log(nums.length);
  for (let i = nums.length; i > 0; i--) {
    console.log(nums.length);
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
    }
  }
  console.log(nums);
  return nums.length;
};

removeDuplicates(numbers);