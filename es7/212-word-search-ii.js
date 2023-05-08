/**
 * 212. Word Search II
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 * Output: ["eat","oath"]
 * Example 2:
 *
 *
 * Input: board = [["a","b"],["c","d"]], words = ["abcb"]
 * Output: []
 *
 *
 * Constraints:
 *
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 12
 * board[i][j] is a lowercase English letter.
 * 1 <= words.length <= 3 * 104
 * 1 <= words[i].length <= 10
 * words[i] consists of lowercase English letters.
 * All the strings of words are unique.
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

  const maxWordLength = Math.max(...words.map(x => x.length));
  const rtn = new Set();
  const visited = new Array(board.length).fill(0).map(x => new Array(board[0].length).fill(false));
  const impl = function (board, i, j, curString, expectedWords){
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length
      || curString.length > maxWordLength || visited[i][j]){
      return;
    }

    visited[i][j] = true;
    const cur = curString + board[i][j];
    if (expectedWords.has(cur)){
      rtn.add(cur);
    }

    impl(board, i - 1, j, cur, expectedWords);
    impl(board, i + 1, j, cur, expectedWords);
    impl(board, i, j - 1, cur, expectedWords);
    impl(board, i, j + 1, cur, expectedWords);

    visited[i][j] = false;
  }

  for (let i = 0; i < board.length; ++i){
    for (let j = 0; j < board[0].length; ++j){
      impl(board, i, j, '', new Set(words));
    }
  }

  return [...rtn];
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain", "kaa"]))


/**
 * tag 回溯
 */
