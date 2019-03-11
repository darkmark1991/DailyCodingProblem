import math

def RunningMedian(nums):
    i = 0
    print(nums)
    while i<len(nums):
        if i % 2 == 0:
            print(float(nums[(int)(i/2)]))
        else:
            print((nums[math.floor(i/2)] + nums[math.ceil(i/2)])/2)
        i += 1


RunningMedian([2, 1, 5, 7, 2, 0, 5])

