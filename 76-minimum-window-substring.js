/**
 * 76. 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 *
 *
 *
 * 注意：
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 * 示例 1：
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 示例 2：
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 示例 3:
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 * 提示：
 *
 * 1 <= s.length, t.length <= 105
 * s 和 t 由英文字母组成
 *
 *
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const target = new Map();
    // 初始化计数
    t.split('').forEach(x => target.set(x, 0));
    t.split('').forEach(x => target.set(x, target.get(x) + 1));

    /**
     *
     * @param m {Map}
     * @param c {string}
     */
    const decr = function (m, c){
        if (m.has(c)){
            m.set(c, m.get(c) - 1);
        }else {
            m.set(c, -1);
        }
    }

    /**
     *
     * @param m {Map}
     * @param c {string}
     */
    const incr = function (m, c){
        if (m.has(c)){
            m.set(c, m.get(c) + 1);
        }else {
            m.set(c, 1);
        }
    }

    let cur = new Map(target);
    let sum = t.length;
    let i = 0, j = 0;
    let rtn = [];
    while (j < s.length) {
        const curChar = s[j];
        if (cur.has(curChar)) {
            decr(cur, curChar);
            if (cur.get(curChar) >= 0){
                sum--;
            }

            // 满足条件时更新答案
            if (sum === 0){
                while (i <= j && (!cur.has(s[i]) || cur.get(s[i]) < 0)) {
                    if (cur.has(s[i])){
                        incr(cur, s[i]);
                    }
                    i++;
                }

                // 更新结果
                if (rtn.length === 0 || (j - i < rtn[1] - rtn[0])) {
                    rtn = [i, j];
                }
                // 完成左指针移动，复位
                sum = 1;
                incr(cur, s[i])
                // 移动左指针
                i++;
            }

            j++;
        } else {
            // 移动右指针
            j++;
        }
    }

    if (rtn.length === 0){
        return "";
    }else {
        return s.slice(rtn[0], rtn[1] + 1);
    }
};

console.log(minWindow("ADOBECODEBANC", "ABC"), "BANC");
console.log(minWindow("a", "a"), "a");
console.log(minWindow("a", "aa"), "");
console.log(minWindow("AXXXXXXXCBCADKXBAB", "ABC"), "BCA");

/**
 * tag 滑动窗口 hard
 */