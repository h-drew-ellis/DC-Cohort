listing = []

while True:

    print("Press 1 to view all task")
    print("Press 2 to add task")
    print("Press 3 to delete tasks")
    print("Press q to quit")

    selection = input("Please make a selection from above. : ")

    if selection == "q":
        break

    elif selection == "1":
        x = open("todolist.txt", "r")
        text = x.read()
        print("")
        print(text)
        print("")

    elif selection == "2":
        task = input("What task needs to be done? or input \"q\" to quit : ")
        priority = input("What priority out of [high, med, low]? : ")
        listing.append(task + "-|-|-" + priority)

        if task == "q":
            break

        with open("todolist.txt", "a") as file:
            file.write(listing)
    
    elif selection == "3":
        x = open("todolist.txt", "r+")
        text = x.read().split()
        for index in text:
            print(index)
    
    else:
        print("")
        print("***DANGER, WILL ROBINSON!***")
        print("~Invalid input, please try again.~")
        print("")