# DailyCodingProblem #29

def RunLenEncode (s):
    res = ""
    cur = s[0]
    count = 0
    for c in s:
        if c != cur:
            res += str(count) + cur
            count = 1
            cur = c
        else:
            count += 1
    res += str(count) + cur
    return res

def RunLenDecode (s):
    res = ""
    i = 0
    count = ''
    while i < len(s):
        if s[i+1].isdigit():
            count += s[i]
            i += 1
        else:
            count += s[i]
            j = 0
            while j < int(count):
                res += s[i+1]
                j += 1
                
            count = ''
            i += 2
    return res

string = "AAAABBBCCDAA"
encoded = RunLenEncode(string)
decoded = RunLenDecode(encoded)
print(string, " => ", encoded, " => ", decoded)
# expected output: AAAABBBCCDAA  =>  4A3B2C1D2A  =>  AAAABBBCCDAA

string = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBCCDA"
encoded = RunLenEncode(string)
decoded = RunLenDecode(encoded)
print(string, " => ", encoded, " => ", decoded)
# expected output: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBCCDA  =>  48A3B2C1D1A  =>  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBCCDA

