/**
 * 125. Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * Example 2:
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * Example 3:
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0, r = s.length - 1;
  while (true){
    while (l < r && !/[a-z0-9]/i.test(s[l])){
      l++;
    }
    while (l < r && !/[a-z0-9]/i.test(s[r])){
      r--;
    }
    if (l >= r){
      return true;
    }
    const lc = s[l].toLowerCase();
    const rc = s[r].toLowerCase();
    if (lc !== rc){
      return false;
    }

    l++;
    r--;
  }
};

/**
 * tag 双指针 回文
 */
