/**
 * 371. Sum of Two Integers
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 *
 *
 * Example 1:
 *
 * Input: a = 1, b = 2
 * Output: 3
 * Example 2:
 *
 * Input: a = 2, b = 3
 * Output: 5
 *
 *
 * Constraints:
 *
 * -1000 <= a, b <= 1000
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  while ((b & 0xffffffff) !== 0){
    // 直接获取所有位的进位，并且将其左移一次以对齐待加和的位置
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};

console.log(getSum(-1, -2), -3);
console.log(getSum(1, 2), 3);
console.log(getSum(1, 1), 2);
console.log(getSum(1, 7), 8);

/**
 * tag 位运算 优雅解法
 *
 * 太牛逼了，js的xor操作在底层会将负数用补码处理，然后进行操作。这使得这道题无需我们自己去实现补码逻辑。
 * 不过，大概率是因为内存上的负数本就是补码存储的，此处js只是直接处理了内存上的数据。
 *
 * ref: [javascript - How does bitwise AND OR and XOR works on -negative signed integers? - Stack Overflow](https://stackoverflow.com/questions/53950063/how-does-bitwise-and-or-and-xor-works-on-negative-signed-integers)
 *
 */
