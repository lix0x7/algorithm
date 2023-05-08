/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let rtn = "";
  for (let i = 0;; i++){
    let cur = undefined;
    for (const s of strs){
      if (i >= s.length){
        return rtn;
      }
      cur = cur || s[i];
      if (cur !== s[i]){
        return rtn;
      }
    }
    rtn += cur;
  }
};

/**
 * tag 字符串
 * 题解的横向扫描和纵向扫描都挺有意思的
 * https://leetcode.cn/problems/longest-common-prefix/
 */
