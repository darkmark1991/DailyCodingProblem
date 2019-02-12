### Daily Coding Problem: Problem #4
##### 2019-02-08
##### Problem:
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.


##### Pseudocode:
```bash
BEGIN EndMax (arr)
    max = arr[0]
    FOR each elem in arr starting from second
        IF elem > max
            max = elem
END

BEGIN CountSort (arr, exp)
    count = Array(19){0}
    addUp = Array(19){0}

    FOR each elem in arr
        GET digit at position exp
        INCREMENT count[digit + 9]
    
    addUp[0] = count[0]
    
    FOR i in 1 to 19
        addUp[i] += addUp[i-1] + count[i]

    # We sort the array in place 
    # to keep space copmplexity constant
    FOR each elem in arr
        GET digit at position exp
        IF count[digit] != 0
            arr_pos = addUp[digit + 9]-1
            IF arr_pos not in current position
                SWITCH elem with the element at arr_pos
            count[digit + 9]--;
            addUp[digit + 9]--;
            IF arr_pos was right of current position
                STAY at current position for next iteration
END

BEGIN RadixSort (arr)
    max = GetMax(arr)
    exp = 1
    
    WHILE max/exp >= 1
        CountSort(arr, exp)
        exp *= 10
END 

# Basically we sort the array using radix sort
# and while iterating over it we compare it's positive members
# to incrementing n (starting from one)
# if at some point they don't match we return n
BEGIN FindLPI (arr)
    RadixSort(arr)
    
    n = 1
    
    FOR elem in arr
        IF elem is positive 
            IF elem != n
                RETURN n
            ELSE 
                INCREMENT n
           
    RETURN n
END
```