total = int(input("What is your total bill? : "))
tip = float(input ("What precentage do you want to tip?(PLEASE USE A DECIMAL) : "))
bill = (total * tip) + total

print(f"Your bill was {total}")
print(f"with a tip of {tip}")
print(f"Your total bill is {bill}")