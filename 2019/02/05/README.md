### Daily Coding Problem: Problem #1
##### 2019-02-05
##### Problem:

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


##### Pseudocode:
We can do it like this:
```bash
    BEGIN FUNCTION (array, k)
        # Optionally filter out the members of the array
        # that are greater than k by themselves
        # to reduce the size of nested loops
        FOR (value, index) IN array
            IF value > k
                DELETE array[index]

        FOR value_1 IN array
            res_array[index_1] = 1            
            FOR value_2 IN array
                IF value_1 + value_2 === k
                    RETURN True
        RETURN False
    END
```
Or do filtering on the fly:
```bash
    BEGIN FUNCTION (array, k)
        FOR (value_1, index_1) IN array
            IF value_1 > k
                DELETE array[index]
            res_array[index_1] = 1            
            FOR (value_2, index_2) IN array
                IF value_1 > k
                    DELETE array[index_2]
                IF value_1 + value_2 === k
                    RETURN True
        RETURN False
    END
```
