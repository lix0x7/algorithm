/**
 * 394. 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 示例 2：
 *
 * 输入：s = "3[a2[c]]"∑
 * 输出："accaccacc"
 * 示例 3：
 *
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 示例 4：
 *
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 30
 * s 由小写英文字母、数字和方括号 '[]' 组成
 * s 保证是一个 有效 的输入。
 * s 中所有整数的取值范围为 [1, 300]
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

  let stack = [];

  const isDigital = function (char) {
    return !isNaN(Number.parseInt(char));
  }

  for (const c of s) {
    if (c === '[') {
      stack.push('');
      continue;
    }

    if (c === ']') {
      let subString = stack.pop();
      let times = Number.parseInt(stack.pop());
      stack.push(subString.repeat(times));
      while (stack.length >= 2 && !isDigital(stack[stack.length - 2][0])) {
        const s1 = stack.pop();
        const s2 = stack.pop();
        stack.push(s2 + s1);
      }
      continue;
    }

    let top = stack[stack.length - 1] || '';
    if (isDigital(c)) {
      // number
      if (!isDigital(top[0])) {
        stack.push('');
      }
      stack[stack.length - 1] = stack[stack.length - 1] + c;
    } else {
      // alphabet
      if (stack.length === 0 || isDigital(top)) {
        stack.push('');
      }
      stack[stack.length - 1] = stack[stack.length - 1] + c;
    }
  }

  return stack.join('');
};

console.log(decodeString('abc'), 'abc');
console.log(decodeString('a1[]'), 'a');
console.log(decodeString('a2[b]'), 'abb');
console.log(decodeString('a2[b]a2[b]'), 'abbabb');
console.log(decodeString('a2[b2[c]]'), 'abccbcc');

/**
 * tag 错题本 栈 编译原理
 *
 * 类似于逆波兰表达式的思路
 *
 */