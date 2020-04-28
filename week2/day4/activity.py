num1 = input("please provide a number :")
num2 = input("please provide a number :")

try:
    check1 = int(num1)
    check2 = int(num2)
    sum = check1 + check2
    print(sum)
except ValueError:
    print("please provide numbers, not letters")


