import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

class Q3Longest {
    public int lengthOfLongestSubstring(String s) {
        int rst = 0;
        int l = 0;
        var m = new HashMap<Character, Integer>();

        for (int r = 0; r < s.length(); ++r){
            var c = s.charAt(r);
            if (m.containsKey(c)){
                // 这一步是关键，考虑 ”abba“这种例子
                // 当扫描到a时，l为2，但m.get("a")是0，此时真实的左边界应该为2
                l = Math.max(l, m.get(c) + 1);
            }
            m.put(c, r);
            rst = Math.max(rst, r - l + 1);
        }
        return rst;
    }
}