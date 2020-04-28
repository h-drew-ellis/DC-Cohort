tasks = [{"task" : "run", "priority" : "high"}]
things = [tasks]
#menu option
print("Welcome to the to-do list app!")
print(" ")
print("Please press 1 to add a task" )
print("Please press 2 to remove a task")
print("Please press 3 to view all tasks")
print("Please press q to quit app")

userinput = input("please make a selection from above. : ")

while userinput != "q":
    if userinput == '1':
        choice = input("Let's add a task! Please press '1' to add a task or 'q' to return to main menu. : ")

        while choice != "q":
            if choice == "1":
                task = input("What task wouold you like to add? : ")
                priority = input("Options : high, med, low. What level of priority is this task? : ")
                tasks.append({"task" : task, "Priority" : priority})
                print("Task has been added! Please press '1' to add another task or 'q' to return to home menu.")
            else:
                print(str(input("Invalid input please press '1' to add a task or 'q' to return to home menu. : ")))
        print(tasks)
        print(things)
    elif userinput == '2':
        print(enumerate(things))
        delt = int(input("Please choose task number to delete : "))
        tasks.pop(delt)
        print(f"Updated list : {print(things)}")
        break
    elif userinput == '3':
        print(things)
        break
    else:
        print("***!HIC SUNT DRACONES!***")
        print("***INVALID INPUT***")
        print("please try another selection")
        break
    continue
