/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 示例 2：
 *
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 示例 3：
 *
 * 输入：s = ""
 * 输出：0
 *
 *
 * 提示：
 *
 * 0 <= s.length <= 3 * 104
 * s[i] 为 '(' 或 ')'
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {

    // dp数组表示以第i个字符结尾的有效括号子串长度
    const dp = new Array(s.length).fill(0);

    let rtn = 0;
    for (let i = 1; i < s.length; ++i) {
        if (s[i] === '('){
            dp[i] = 0;
        }else if (s[i] === ')'){
            const lastLength = dp[i - 1];
            const left = i - lastLength - 1;
            if (s[left] === '('){
                dp[i] = (i - left + 1) + (left - 1 >= 0 ? dp[left - 1] : 0);
                rtn = rtn > dp[i] ? rtn : dp[i];
            }else {
                dp[i] = 0;
            }
        }
    }

    return rtn;
};

console.log(longestValidParentheses('()()'), 4);
console.log(longestValidParentheses('(()())'), 6);
console.log(longestValidParentheses('()(())'), 6);
console.log(longestValidParentheses('(()())()'), 8);
console.log(longestValidParentheses('('), 0);
console.log(longestValidParentheses(')'), 0);
console.log(longestValidParentheses(''), 0);

/**
 * tag 错题 dp
 *
 * 除了dp，还有栈和贪心的方法，也很好
 *
 */