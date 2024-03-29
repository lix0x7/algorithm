/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 示例 1：
 *
 * 输入：s = "()"
 * 输出：true
 * 示例 2：
 *
 * 输入：s = "()[]{}"
 * 输出：true
 * 示例 3：
 *
 * 输入：s = "(]"
 * 输出：false
 * 示例 4：
 *
 * 输入：s = "([)]"
 * 输出：false
 * 示例 5：
 *
 * 输入：s = "{[]}"
 * 输出：true
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 104
 * s 仅由括号 '()[]{}' 组成
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s){
        return true;
    }

    const stack = [];
    const m = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    for (let c of s.split('')){
        if (Object.keys(m).find(x => x === c) && stack.length !== 0 && stack.pop() === m[c]){
        } else if (Object.values(m).find(x => x === c)){
            stack.push(c);
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("([)]"), false);
console.log(isValid("([])"), true);
console.log(isValid("("), false);

/**
 * tag 栈
 */