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
    let l = 0;
    height[-1] = 0;
    height.push(0);
    for (let r = 0; r < height.length; ++r){
        const rh = height[r];
        const lh = height[l];
        if (rh >= lh){
            let i = r;
            while (i >= l){
                sum += Math.max(0, lh - height[i]);
                i--;
            }
            l = r;
        }
    }

    let r = height.length - 1;
    while (r > l){
        while (r > l && height[r - 1] >= height[r]){
            r--;
        }
        const h = height[r];
        while (r >= l && height[r] <= h){
            sum += Math.max(0, h - height[r]);
            r--;
        }
    }

    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6);
console.log(trap([4,2,0,3,2,5]), 9);
console.log(trap([9,6,8,8,5,6,3]), 3);
