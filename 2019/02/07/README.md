### Daily Coding Problem: Problem #3
##### 2019-02-07
##### Problem:
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```bash
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:
```bash
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

##### Pseudocode:
```bash
BEGIN Serialize (node)
    IF node IS NULL_PTR
        RETURN "NULL"
    ELSE
        RETURN node.val + ' ' + SERIALIZE(node.left) + ' ' + SERIALIZE(node.right)
END

BEGIN Deserialize (str)
    value = SUBSTR of str UNTIL FIRST WHITESPACE
    IF value == 'NULL'
        RETURN NULL_PTR
    ELSE
        rest = SUBSTR of str AFTER FIRST WHITESPACE
        next = SUBSTR of rest UNTIL FIRST WHITESPACE
        
        res = Node(value)
        
        IF next == 'NULL'
            node.right = DESERIALIZE(rest)
        ELSE
            node.left = DESERIALIZE(rest)
    RETURN res
END
```