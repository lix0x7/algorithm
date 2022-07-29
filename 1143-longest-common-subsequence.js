/**
 * 1143. Longest Common Subsequence
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 *
 *
 * Example 1:
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * Example 2:
 *
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 * Example 3:
 *
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 *
 * Constraints:
 *
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var longestCommonSubsequence = function (s1, s2) {
  const dp = new Array(s1.length).fill(0).map(x => new Array(s2.length).fill(0));
  dp[-1] = [];
  for (let i = 0; i < s1.length; ++i) {
    for (let j = 0; j < s2.length; ++j) {
      dp[i][j] = Math.max(
        dp[i][j - 1] || 0,
        dp[i - 1][j] || 0,
        (s1[i] === s2[j] ? 1 : 0) + (dp[i - 1][j - 1] || 0)
      );
    }
  }
  return dp[s1.length - 1][s2.length - 1];
}

console.log(longestCommonSubsequence("abcdef", "acf"), 3)
console.log(longestCommonSubsequence("abc", "abc"), 3);
console.log(longestCommonSubsequence("abc", "edf"), 0);

/**
 * tag 动态规划
 */
