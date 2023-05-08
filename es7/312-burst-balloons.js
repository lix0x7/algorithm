/**
 * 312. 戳气球
 * 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 *
 * 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
 *
 * 求所能获得硬币的最大数量。
 *
 *
 *
 * 示例 1：
 * 输入：nums = [3,1,5,8]
 * 输出：167
 * 解释：
 * nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
 * coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
 * 示例 2：
 *
 * 输入：nums = [1,5]
 * 输出：10
 *
 *
 * 提示：
 *
 * n == nums.length
 * 1 <= n <= 300
 * 0 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums.unshift(1);
  nums.push(1);

  // dp[i][j] 表示戳破[i, j)位置气球后的收益
  // 最终结果为dp[1][nums.length-1]
  const dp = new Array(nums.length).fill(0).map(x => new Array(nums.length).fill(undefined));

  for (let i = 1; i < nums.length - 1; i++){
    dp[i][i] = 0;
    dp[i][i + 1] = nums[i] * nums[i - 1] * nums[i + 1];
  }

  const impl = function (nums, i, j){
    if (i > j){
      return 0;
    }
    if (dp[i][j] !== undefined){
      return dp[i][j];
    }

    let rtn = 0;
    for (let offset = 0; offset < j - i; offset++){
      // 待扎位置，[i, j)
      let cur = i + offset;
      rtn = Math.max(
        rtn,
        impl(nums, i, cur) + impl(nums, cur + 1, j) + nums[cur] * nums[i - 1] * nums[j],
      )
    }
    dp[i][j] = rtn;
    return rtn;
  }

  impl(nums, 1, nums.length - 1);

  return dp[1][nums.length - 1];
};

console.log(maxCoins([3,1,5,8]), 167);
console.log(maxCoins([1,5]), 10);

/**
 * tag 动态规划
 */
