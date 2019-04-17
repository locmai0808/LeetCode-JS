function twoSum(nums, target) {
  var numsMap = {};
  var results = [];
  for (var i = 0; i < nums.length; i++) {
    if (target - nums[i] in numsMap) {
      results[1] = i;
      results[0] = numsMap[target - nums[i]];

      console.log(numsMap);
      return results;
    }
    numsMap[nums[i]] = i;
  }

  return results;
}

console.log(twoSum([7, 3, 1, 2], 9));
