#!/usr/bin/python3
class LockedClass:
    __slots__ = ["first_name"]

    def __setattr__(self, key, value):
        if not hasattr(self, "first_name") and key != "first_name":
            raise AttributeError(f"{self.__class__.__name__} does not allow creating new attributes")
        super().__setattr__(key, value)
