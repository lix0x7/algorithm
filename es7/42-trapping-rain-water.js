/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 * 示例 2：
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 * 提示：
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0;
    let l = 0, r = height.length - 1;

    while (l < r) {
        const lh = height[l];
        const rh = height[r];
        if (lh < rh) {
            let i = l;
            while (i < r && height[i] <= lh) {
                sum += lh - height[i];
                i++;
            }
            l = i;
        } else {
            let i = r;
            while (l < i && height[i] <= rh) {
                sum += rh - height[i];
                i--;
            }
            r = i;
        }
    }

    return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
console.log(trap([9, 6, 8, 8, 5, 6, 3]), 3);
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]), 23);

/**
 * tag 双指针
 * 双指针思路的根本，一个位置的水深度取决于他左右两侧矮的那个板子，所以 当前位置水量 = Min(左指针高度，右指针高度) - 当前高度
 * 怎么判定该移动哪个指针？
 * 答：移动更矮的那个板，因为这样才不会减小min(左，右)，但如果移动高板，可能会导致min(左，右)减小，从而导致错误计算一些位置的蓄水高度
 */