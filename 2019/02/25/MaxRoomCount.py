# DailyCodingProblem #21

import sys

def MinRoomCount (arr):
    maxCount = 0
    start = sys.maxsize
    end = 0

    for (a, b) in arr:
        start = a if a < start else start
        end = b if b > end else end

    for i in range(start, end):
        count = 0
        for (a, b) in arr:
            if a < i < b:
                count += 1
        maxCount = count if count > maxCount else maxCount
    
    return maxCount
    

times = [(30, 75), (0, 50), (60, 150)]
count = MinRoomCount(times)
print("For the following schedule: ", times)
print("Minimum number of rooms required is: ", count)
# expected result: 2

