# DailyCodingProblem #21

import sys

def MinRoomCountThatSucks (arr):
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
    
def MinRoomCount (arr):
    maxCount = 0
    length = len(arr)
    i = 0
    
    while (i < length):
        j = 0
        count = 1
        while (j < length):
            if j != i and arr[j][0] < arr[i][0] < arr[j][1]:
                count += 1
            j += 1
        i += 1
        maxCount = count if count > maxCount else maxCount
    
    return maxCount
    

times = [(30, 75), (0, 50), (60, 150)]
count = MinRoomCount2(times)
print("For the following schedule: ", times)
print("Minimum number of rooms required is: ", count)
# expected result: 2

# time benchmarks below
"""
if __name__ == "__main__":
    import timeit
    setup = "from __main__ import MinRoomCount"
    print("MinRoomCount: ", timeit.timeit("MinRoomCount([(30, 75), (0, 50), (60, 150)])", setup=setup))
    setup = "from __main__ import MinRoomCountThatSucks"
    print("MinRoomCountThatSucks: ", timeit.timeit("MinRoomCountThatSucks([(30, 75), (0, 50), (60, 150)])", setup=setup))
"""
