"""
295. Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0


Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.


Follow up:

If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
"""
import heapq

class MedianFinder:

    def __init__(self):
        # 左侧大顶堆
        self.left = []
        # 右侧小顶堆
        self.right = []

    def addNum(self, num: int) -> None:
        # 先保证左右堆在数字大小顺序上满足要求
        heapq.heappush(self.left, [10 ** 6 - num, num])
        leftMax = heapq.heappop(self.left)[1]
        heapq.heappush(self.right, [leftMax, leftMax])

        # 平衡左右堆
        if len(self.right) > len(self.left):
            top = heapq.heappop(self.right)[1]
            heapq.heappush(self.left, [10 ** 6 - top, top])

    def findMedian(self) -> float:
        if len(self.left) == len(self.right):
            return (self.left[0][1] + self.right[0][1]) / 2
        else:
            return self.left[0][1]


m = MedianFinder()
m.addNum(-1)
print(m.findMedian(), f"\t -1")
m.addNum(-2)
print(m.findMedian(), f"\t -1.5")
m.addNum(-3)
print(m.findMedian(), f"\t -2")
m.addNum(-4)
print(m.findMedian(), f"\t -2.5")
m.addNum(-5)
print(m.findMedian(), f"\t -3")

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()

# tag 堆 错题本
# 这题没用js，因为js没有可用的堆实现，改用py实现
