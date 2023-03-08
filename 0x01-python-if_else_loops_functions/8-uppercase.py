#!/usr/bin/python3
def uppercase(s):
    uppercase_s = ""
    for c in s:
        ascii_code = ord(c)
        if 97 <= ascii_code <= 122:
            uppercase_ascii_code = ascii_code - 32
            uppercase_s += chr(uppercase_ascii_code)
        else:
            uppercase_s += c
    print("{}\n".format(uppercase_s))
