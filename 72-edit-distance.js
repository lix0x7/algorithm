/**
 * 72. 编辑距离
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 * 示例 1：
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 示例 2：
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 * 提示：
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (!word1 || !word2) {
        return word1.length + word2.length;
    }
    // dp[i][j] 表示 word1[1...i] 转变为 word2[1...j] 需要的不足后
    const dp = new Array(word1.length).fill(0).map(x => new Array(word2.length).fill(0));
    dp[-1] = {};
    dp[-1][-1] = 0;
    for (let i = 0; i < dp.length; ++i) {
        dp[i][-1] = i + 1;
    }
    for (let i = 0; i < dp[0].length; ++i) {
        dp[-1][i] = i + 1;
    }
    for (let i = 0; i < word1.length; ++i) {
        for (let j = 0; j < word2.length; ++j) {
            // console.log(word1[i], word2[j], additional);
            dp[i][j] = Math.min(
                (word1[i] === word2[j] ? 0 : 1) + dp[i - 1][j - 1],
                1 + dp[i - 1][j],
                1 + dp[i][j - 1],
            );
        }
    }

    return dp[word1.length - 1][word2.length - 1];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
console.log(minDistance("sea", "eat"));

/**
 * tag 动态规划 错题
 */