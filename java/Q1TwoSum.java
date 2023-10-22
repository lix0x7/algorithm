import java.util.Arrays;
import java.util.HashMap;

class Q1TwoSum {
    public int[] twoSum(int[] nums, int target) {
        var m = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            var cur = nums[i];
            var anotherIdx = m.get(target - cur);
            if (anotherIdx != null){
                return new int[]{i, anotherIdx};
            }
            m.put(cur, i);
        }

        return new int[]{};
    }

    public static void main(String[] args) {
        var s = new Q1TwoSum();
        System.out.println(Arrays.toString(s.twoSum(new int[]{1, 2, 3}, 5)));
        System.out.println(Arrays.toString(s.twoSum(new int[]{1, 2, 3}, 3)));
        System.out.println(Arrays.toString(s.twoSum(new int[]{1, 1, 3}, 2)));
    }
}