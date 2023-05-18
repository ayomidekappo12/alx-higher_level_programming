#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    result_list = []
    for i in range(list_length):
        try:
            quotient = 0
            if isinstance(my_list_1[i], (int, float)) and isinstance(my_list_2[i], (int, float)):
                quotient = my_list_1[i] / my_list_2[i]
            else:
                raise TypeError
        except IndexError:
            quotient = 0
            print("out of range")
        except TypeError:
            quotient = 0
            print("wrong type")
        except ZeroDivisionError:
            quotient = 0
            print("division by 0")
        finally:
            result_list.append(quotient)
    return result_list
