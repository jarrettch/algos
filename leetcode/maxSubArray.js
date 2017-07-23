let nums = [-2,1,-3,4,-1,2,1,-5,4];

let maxSubArray = function(nums) {
  let sum = 0;
  let contiguousSum = 0;
  for (let i = 0; i < nums.length; i++) {
    contiguousSum = nums[i] + nums[i+1] + nums[i+2] + nums[i+3];
    console.log(contiguousSum);
    if (contiguousSum > sum) {
      sum = contiguousSum
    }
  }
  console.log(sum);
}

maxSubArray(nums);