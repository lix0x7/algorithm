/**
 * 647. Palindromic Substrings
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * Example 2:
 *
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const dp = new Array(s.length).fill(0).map(x => new Array(s.length).fill(false));
  let count = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    for (let j = 0; j < s.length; ++j) {
      if (i >= j) {
        dp[i][j] = true;
      } else {
        if (s[i] === s[j] && i < s.length - 1 && j > 0) {
          dp[i][j] = dp[i + 1][j - 1];
        } else {
          dp[i][j] = false;
        }
      }
      if (dp[i][j] && i <= j) {
        count++;
      }
    }
  }

  return count;
};

console.log(countSubstrings("abc"), 3);
console.log(countSubstrings("aaa"), 6);

/**
 * tag 动态规划
 * 官方题解中心扩展方法，时间复杂度O(n^2)，空间复杂度O(1)，比dp要好
 */