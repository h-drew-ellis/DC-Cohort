num = int(input("Please feed me a number : "))

if num % 3 == 0 and num % 5 == 0:
    print("FIZZ BUZZ!!")
elif num % 3 == 0:
    print("FIZZ!!")
elif num % 5 == 0:
    print("BUZZ!!")
else:
    print("No FIZZ, No BUZZ.... :(..")