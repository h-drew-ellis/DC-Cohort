#Factorial example: n! = n*(n-1)*(n-2)*(n-3)*(n-4)*etc. (until 1)
# 5! = 5*4*3*2*1 = 120
num = int(input("Please feed me a number : "))
i = 1

for x in range(1, num+1):
    i = x*i
    print(i)