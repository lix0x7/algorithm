class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        rst = 0
        while l < r:
            curH = min(height[l], height[r])
            rst = max(rst, curH * (r - l))
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return rst