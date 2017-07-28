// Add to optimize list

let nums = [-1, -1, -2];

var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  // console.log(map);
  for (key in map) {
    if (map.hasOwnProperty(key)) {
      // console.log(map[key]);
      // console.log(key);
      if (map[key] === 1) {
        // console.log(key);
        return key.valueOf();
      }
    }
  }
}

singleNumber(nums);