# Basically what cons does is return a function (pair)
# that takes an argument function (f) and returns f(a, b)
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
    
# In order to get the first element
# we define function that takes two arguments and returns the first one
# and pass it to the pair recieved as an argument of car
# the pair executes our function and returns the result
def car(pair):
    def firsr(a, b):
        return a
    return pair(firsr)

# Similarly for cdr
def cdr(pair):
    def last(a, b):
        return b
    return pair(last)

print "First element of pair (3,4): %d" % car(cons(3, 4)) # Output: 3
print "Last element of pair (3,4): %d" % cdr(cons(3, 4)) # Output: 4
