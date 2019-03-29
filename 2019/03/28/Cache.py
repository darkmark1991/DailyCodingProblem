# DailyCodingProblem #52

class Cache:
  def __init__(self, size):
    self.size = size
    self.cache = []

  def set(self, key, value):
    if len(self.cache) == self.size:
        self.cache.pop(0)
    self.cache.append({"key": key, "value": value})

  def get(self, key):
    res = None
    i = 0
    while i < len(self.cache):
      if self.cache[i]["key"] == key:
        res = self.cache[i]["key"]
        tmp = self.cache.pop(i)
        self.cache.append(tmp)
        break
      i += 1
    return res

cache = Cache(3)

cache.set("a","A")
cache.set("b","B")
cache.set("c","C")
cache.set("d","D")

print(cache.cache) # b, c, d
print(cache.get("b")) # 'B'
print(cache.get("k")) # None
print(cache.cache) # c, d, b
cache.set("e","E")
print(cache.cache) # d, b, e