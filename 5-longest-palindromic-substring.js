/**
 * tag: 错题本 动态规划
 *
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 示例 2：
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = new Array(s.length).fill(0).map(x => new Array(s.length).fill(false));
    let maxi = 0, maxj = 0;
    for (let i = s.length - 1; i >= 0; --i){
        for (let j = i; j < s.length; ++j){
            if (i === j){
                dp[i][j] = true;
            }else {
                const a = s[i];
                const b = s[j];
                // 依赖更大的i和更小的j，所以迭代方向应该是i从大到小，j从小到大
                if (a === b && (dp[i + 1][j - 1] || i + 1 >= j - 1)){
                    dp[i][j] = true;
                    if ((j - i + 1) > (maxj - maxi + 1)){
                        maxj = j;
                        maxi = i;
                    }
                }
            }

        }
    }

    return s.substring(maxi, maxj + 1);
};

// console.log(longestPalindrome("xbabz"), "bab")
// console.log(longestPalindrome("abcbcbbdad"), "bcbcb")
console.log(longestPalindrome("cbbd"), "bb")
