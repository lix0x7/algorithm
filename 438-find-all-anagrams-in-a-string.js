/**
 * 438. 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 *
 *
 * 示例 1:
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *  示例 2:
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 * 提示:
 *
 * 1 <= s.length, p.length <= 3 * 104
 * s 和 p 仅包含小写字母
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // todo: to optimize
  let l = 0;
  let r = 0;
  const m = new Map();
  const t = new Map();
  const rtn = [];

  for (const c of p){
    !t.has(c) && t.set(c, 0);
    t.set(c, t.get(c) + 1);
  }
  for (const c of s){
    m.set(c, 0);
  }

  /**
   *
   * @param m1 {Map}
   * @param m2 {Map}
   * @return {boolean}
   */
  const eq = function (m1, m2){
    const keys = new Set([...m1.keys(), ...m2.keys()])
    for (const k of keys){
      if (!m1.get(k) && !m2.get(k)){
        continue;
      }
      if (m1.get(k) > 0 && m2.get(k) > 0 && m1.get(k) === m2.get(k)){
        continue;
      }else {
        return false;
      }
    }
    return true;
  }

  while (l <= r && r < s.length){
    const rc = s[r];
    m.set(rc, m.get(rc) + 1);

    if (m.get(rc) > t.get(rc)){
      // 当前字符串有多余字符时，移动左指针直到剔除该多余字符
      while (s[l] !== rc){
        const lc = s[l];
        l++;
        m.set(lc, m.get(lc) - 1);
      }
      l++;
      m.set(rc, m.get(rc) - 1);
    }

    if (r - l + 1 > p.length){
      m.set(s[l], m.get(s[l]) - 1);
      l++;
    }

    if (r - l + 1 === p.length && eq(m, t)){
      // 检查成功则保存一个左指针位置
      rtn.push(l);
    }

    // 移动右指针
    r++;
  }

  return rtn;
};


console.log(findAnagrams('cbaebabacd', 'abc'), [0, 6]);
console.log(findAnagrams('abab', 'ab'), [0, 1, 2]);
console.log(findAnagrams('baa', 'aa'), [1]);

/**
 * tag 双指针
 */