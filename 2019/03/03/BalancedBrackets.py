# DailyCodingProblem #27

def BalancedBrackets (str):
    count = 0
    last = ''
    for c in str:
        if c == '(':
            last = c
            count += 1
        elif c == ')':
            if last in "[{":
                return False
            last = c
            count -= 1
        elif c == '[':
            last = c
            count += 10
        elif c == ']':
            if last in "({":
                return False
            last = c
            count -= 10
        elif c == '{':
            last = c
            count += 100
        elif c == '}':
            if last in "[(":
                return False
            last = c
            count -= 100
    return count == 0

print("([])[]({}) has balanced brackets: ", BalancedBrackets("([])[]({})"))
print("([)] has balanced brackets: ", BalancedBrackets("([)]"))
print("((() has balanced brackets: ", BalancedBrackets("((()"))
