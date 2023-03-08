#!/usr/bin/python3
numbers = ["{:02d}".format(e) for e in range(0, 100)]
print(", ".join(numbers))
