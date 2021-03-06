### Daily Coding Problem: Problem #7
##### 2019-02-11
##### Problem:
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.


##### Pseudocode:
```bash
BEGIN CountDecodeWays (msg)
    ways = 1
    
    FOR num in msg except last two
        IF num <= 2
            IF next_num <= 2
                ways *= 1.5
            ELSE
                ways *= 2
    IF the num before last <= 2
        ways *= 2
END
```

*P.S. I also implemented recursive DecodeMessage function that returns an array of all possible decodings of the message.*