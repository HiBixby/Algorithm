#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#


def timeConversion(s):
    # Write your code here
    hour = int(s[:2]) % 12
    if s[-2:] == "PM":
        return ("0"+str(hour+12))[-2:]+s[2:-2]
    else:
        return ("0"+str(hour))[-2:]+s[2:-2]


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()
    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
