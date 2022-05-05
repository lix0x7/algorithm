/**
 * 79. 单词搜索
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * 输出：true
 * 示例 2：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * 输出：true
 * 示例 3：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * 输出：false
 *
 *
 * 提示：
 *
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board 和 word 仅由大小写英文字母组成
 *
 *
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    const used = Array.from(board, () => new Array(board[0].length).fill(false));
    // console.log(used);
    /**
     *
     * @param cur {string}
     * @param i
     * @param j
     */
    const impl = function (cur, i, j){
        if (cur === word){
            return true;
        }
        if (
            i < 0 || i >= board.length || j < 0 || j >= board[0].length
            || used[i][j]
            || cur.length > word.length
            || (cur.length > 0 && cur[cur.length - 1] !== word[cur.length - 1])){
            return false;
        }
        used[i][j] = true;
        const newCur = cur + board[i][j];
        const rtn = impl(newCur, i + 1, j)
        || impl(newCur, i - 1, j)
        || impl(newCur, i, j + 1)
        || impl(newCur, i, j -1);

        used[i][j] = false;

        return rtn;
    }

    for (let i = 0; i < board.length; ++i){
        for (let j = 0; j < board[0].length; ++j){
            if (impl("", i, j)){
                return true;
            }
        }
    }

    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ESEEDASABCCF'), true);
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'), false);

