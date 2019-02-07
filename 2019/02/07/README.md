### Daily Coding Problem: Problem #2
##### 2019-02-07
##### Problem:
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?


##### Pseudocode:
Using division:
```bash
    BEGIN
        FOR (value_1, index_1) IN array
            res_array[index_1] = 1            
            FOR (value_2, index_2) IN array
                res_array[index_1] *= value_2            
            res_array[index] /= value_1
    END
```
w/o division:
```bash
    BEGIN
        FOR (value_1, index_1) IN array
            res_array[index_1] = 1
            FOR (value_2, index_2) IN array
                IF index_1 != index_2
                    res_array[index_1] *= value_2
            res_array[index] /= value_1
    END
```
