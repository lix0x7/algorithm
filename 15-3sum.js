/**
 * tag: 错题本
 *
 * 15. 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 示例 2：
 *
 * 输入：nums = []
 * 输出：[]
 * 示例 3：
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 * 提示：
 *
 * 0 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const rtn = [];
    nums.sort((a, b) => a - b);
    // console.log(nums);
    if (nums.length < 3){
        return [];
    }

    for (let i = 0; i < nums.length - 2; i++){
        // 关键点1：固定一个数字，使用双指针查询剩余两个数字
        let l = i + 1, r = nums.length - 1;
        if (nums[i] > 0){
            return rtn;
        }
        // 关键点2.1：答案去重。不需要遍历答案列表，只需要跳过不必要的左右指针即可
        if (nums[i] === nums[i - 1]){
            continue;
        }
        while (l < r){
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0){
                rtn.push([nums[i], nums[l], nums[r]]);
                // 关键点2.2：答案去重。不需要遍历答案列表，只需要跳过不必要的左右指针即可
                while (l < r && nums[l] === nums[l + 1]){
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]){
                    r--;
                }

                l++;
                r--;
            }else if (sum > 0){
                r--;
            }else if (sum < 0){
                l++;
            }
        }
    }

    return rtn;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2, 2,2]));

/**
 * 确实没转过弯来，即使已经知道是排序+双指针，也没反应过来，需要锻炼下
 */