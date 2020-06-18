#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import random
secret = random.randint(1, 10)
print("woshishui" + "38")
temp = input("请输入一个数字: ")
guess = int(temp)

while guess != 8:
    temp = input("请输入一个数字: ")
    guess = int(temp)
    if guess == 8:
        print("fsdfsa")
        print("sucess")
    else:
        print("hahahhah")
print("end")