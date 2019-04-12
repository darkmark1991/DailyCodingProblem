# DailyCodingProblem #66

from random import random

# toss biased with probability of 70% of getting 0
def toss_biased():
    if random() < .7:
        return 0
    return 1

def toss_unbiased():
    toss1 = toss_biased()
    toss2 = toss_biased()
    # the probability of gettin 0 and 1 is 0.7 * 0.3 = 0.21
    if toss1 == 0 and toss2 == 1:
        return 0
    # the probability of gettin 1 and 0 is also 0.3 * 0.7 = 0.21
    if toss1 == 1 and toss2 == 0:
        return 1
    # if neither of those cases occured we call toss_unbiased recursively
    return toss_unbiased()

print(toss_unbiased())