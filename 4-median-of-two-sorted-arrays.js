/**
 * 4. Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 * Constraints:
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const size = nums1.length + nums2.length;
  let i = 0, j = 0, count = 0;
  let prev = Math.min(nums1[0], nums2[0]), cur = Math.max(nums1[0], nums2[0]);
  for (; count <= size / 2; count++){
    prev = cur;
    if (i >= nums1.length || nums1[i] >= nums2[j]){
      cur = nums2[j];
      j++;
    } else if (j >= nums2.length || nums1[i] < nums2[j]){
      cur = nums1[i];
      i++;
    }
  }
  if (size % 2 === 0){
    // odd
    return (prev + cur) / 2;
  }else {
    return cur;
  }
};

console.log(findMedianSortedArrays([1], [2]), 1.5);
console.log(findMedianSortedArrays([1,2], [3,4]), 2.5);
console.log(findMedianSortedArrays([1,3], [2]), 2);
console.log(findMedianSortedArrays([1,2,3,4], [0]), 2);

/**
 * tag 错题本 不会 优雅解法
 *
 * 双指针O(m+n)方法要掌握，O(lg(m+n))方法就算了，能想到bin search作为思维训练就可以了
 *
 */