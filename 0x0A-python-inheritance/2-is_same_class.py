#!/usr/bin/python3
"""Module is_same_class
Finds if an object is exactly an instance of a class
"""

def is_same_class(obj, a_class):

    return True if type(obj) is a_class else False
