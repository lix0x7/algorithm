/**
 * tag: 回溯
 *
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 示例 2：
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 * 提示：
 *
 * 1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const rtn = [];
    const impl = function (limit, curStr, curLeft, curRight){
        if (curRight > curLeft || curLeft > limit){
            return;
        }
        if (curLeft === n && curLeft === curRight){
            rtn.push(curStr);
            return;
        }

        impl(limit, curStr + '(', curLeft + 1, curRight);
        impl(limit, curStr + ')', curLeft, curRight + 1);
    }

    impl(n, "", 0, 0);
    return rtn;
};

console.log(generateParenthesis(3));

/**
 * tag 回溯
 *
 */