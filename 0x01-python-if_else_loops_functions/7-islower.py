#!/usr/bin/python3
def islower(c):
    if len(c) != 1:
        raise ValueError("Expected a single character")
    ascii_code = ord(c)
    return 97 <= ascii_code <= 122
