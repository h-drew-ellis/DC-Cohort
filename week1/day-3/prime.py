#negative numers are not int i.e. can't count towards being prime
#prime being only divisble by itself and 1
num = int(input("Feed me a number! : "))

if num >= 1:
    for i in range(2, num):
        if(num % i) == 0:
            print("Nope! Not Prime!")
            break
    else:
         print("Yes! it's prime, Blaine the Train's riddle is almost complete.")
