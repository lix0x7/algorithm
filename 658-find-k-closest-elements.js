/**
 * 658. Find K Closest Elements
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 *
 * An integer a is closer to x than an integer b if:
 *
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 *
 *
 * Example 1:
 *
 * Input: arr = [1,2,3,4,5], k = 4, x = 3
 * Output: [1,2,3,4]
 * Example 2:
 *
 * Input: arr = [1,2,3,4,5], k = 4, x = -1
 * Output: [1,2,3,4]
 *
 *
 * Constraints:
 *
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 104
 * arr is sorted in ascending order.
 * -104 <= arr[i], x <= 104
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  // 二分查找模板，寻找可重复有序数组中最先出现的目标值
  let l = 0, r = arr.length - 1;
  while (l < r){
    const mid = l + Math.trunc((r - l) / 2);
    if (arr[mid] >= x){
      r = mid;
    }else {
      l = mid + 1;
    }
  }
  // console.log(l, arr[l], x);
  // 如果不存在，找到小于目标值中最接近的那个
  if (arr[l] > x){
    l--;
  }
  r = l + 1;

  while (k-- > 0){
    const lv = arr[l] ?? Number.POSITIVE_INFINITY, rv = arr[r] ?? Number.POSITIVE_INFINITY;
    if (Math.abs(x - lv) <= Math.abs(x - rv)){
      l--;
    }else {
      r++;
    }
  }
  const rtn = [];
  for (let i = l + 1; i < r; ++i){
    rtn.push(arr[i]);
  }
  return rtn;
};

/**
 * tag 二分查找 错题 细节
 * 思路很简单，二分+双指针，但是又陷入到那个二分查找+1 -1的细节里了...
 */