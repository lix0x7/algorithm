// 快排
// ref: https://oi-wiki.org/basic/quick-sort/
const qs = function (nums, left, right){
    if (right <= left){
        return;
    }

    let i = left;
    let j = right;
    let pivotal = nums[left];
    while (i < j){
        // 关键在于首先开始遍历的方向不能是pivotal所在的一方
        // 这样才能达到遍历完成的同时交换元素的效果
        // 一定有一侧排序是包含等于的情况的，否则和pivotal相同的元素会反复在两侧交换导致死循环！
        while (i < j && nums[j] >= pivotal){
            --j;
        }
        nums[i] = nums[j];

        while (i < j && nums[i] < pivotal){
            ++i;
        }
        nums[j] = nums[i];
    }

    nums[i] = pivotal;

    qs(nums, left, i - 1);
    qs(nums, i + 1, right);

    return nums;
}

const qsWrapper = function (nums){
    return qs(nums, 0, nums.length - 1);
}

console.log(qsWrapper([1, 2, 3]));
console.log(qsWrapper([3, 2, 1], 3));
console.log(qsWrapper([4, 4, 4, 3, 2, 1]));
console.log(qsWrapper([2,6,23,2,6,7,3,2,6,8,9,3,1,1,3,5,7]))