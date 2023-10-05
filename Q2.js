function twoSum(nums, target) {
  seen = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen[complement]) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
  throw new Error('No two sum solution');
}
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);

console.log(result); // [0, 1]