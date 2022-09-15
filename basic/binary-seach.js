/**
 * 二分查找模板，寻找可重复有序数组中最先出现的目标值
 * 如果不存在，找到大于目标值中最接近的那个; 如果目标值大于数组中的最大值，则返回数组中的最大值
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r){
    const mid = l + Math.floor((r - l) / 2);
    // 等于时一定是缩小右边界，否则就会错误的跳过目标值
    if (nums[mid] >= target){
      r = mid;
    }else {
      // mid要+1是为了避免出现后续计算新mid时出现 mid == l 的死循环
      l = mid + 1;
    }
  }
  return l;
};

console.log(search([5], 5), 0);
console.log(search([-1,0,1,2,3], 3), 4);
console.log(search([1,2,3,4,5], 0), 0);
console.log(search([0,3], 1), 1);
console.log(search([0,3], 2), 1);
console.log(search([0,1], 2), 1);

/**
 * tag 经典 数组 二分查找
 */