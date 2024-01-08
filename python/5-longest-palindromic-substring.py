class Solution:
    def longestPalindrome(self, s: str) -> str:
        rst = ""
        for i, c in enumerate(s):
            offset1 = self.expand(s, i, i) - 1
            offset2 = self.expand(s, i, i + 1) - 1
            s1 = s[i-offset1:i+offset1+1]
            s2 = s[i-offset2:i+1+offset2+1]
            curStr = ""
            if len(s1) > len(s2):
                curStr = s1
            else:
                curStr = s2
            if len(curStr) > len(rst):
                rst = curStr
        return rst

    def expand(self, s: str, left: int, right: int) -> int:
        offset = 0
        while left - offset >= 0 and right + offset < len(s) and s[left - offset] == s[right + offset]:
            offset += 1
        return offset


if __name__ == '__main__':
    print(Solution().longestPalindrome("abac"))
    print(Solution().longestPalindrome("cbbd"))
    print(Solution().longestPalindrome("a"))
    print(Solution().longestPalindrome("aa"))
