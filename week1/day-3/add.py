num1 = float(input("Please feed me a number : "))
operand = input("please input operation symbol : (+ for add, - for subtract, *, x for multiply and / for division:" )
num2 = float(input("Please feed me another number : "))

if operand == "+" :
    result = (num1 + num2)
elif operand == "-" :
    result = (num1 - num2)
elif operand == "x" | "*":
    result = (num1 * num2)
else:
    result = (num1 / num2)

print(f"{num1} {operand} {num2} gives the result of : {result}.")