/**
 * 424. Longest Repeating Character Replacement
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * Example 2:
 *
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 105
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let l = 0, r = 0;
  let m = new Map();
  let max = 0;

  while (r < s.length){
    const cur = s[r];
    m.set(cur, (m.get(cur) || 0) + 1);
    max = Math.max(max, m.get(cur));
    if (r - l + 1 - max > k){
      m.set(s[l], m.get(s[l]) - 1);
      l++;
    }
    r++;
  }

  return r - l;
};

console.log(characterReplacement("ABAB", 2), 4);

/**
 * tag 数组 双指针
 * 问题转化的关键在于，「替换多少个字符」等于「子串长度减最多字符数量」
 */