tasks = []

class Task:
    def __init__(self, asg, urg):
        self.asg = asg
        self.urg = urg
        self.completed = False

    def completedtask(self):
        self.completed = True

print("Welcome to the to-do list app!")
print(" ")
print("Please press 1 to add a task" )
print("Please press 2 to remove a task")
print("Please press 3 to view all tasks")
print("Please press q to quit app")

userinput = input("please input from the selection above : ").lower()

while True:
    if userinput == "1":
        add = input("let's add a task! please press 1 to begin or q to return to main menu! : ").lower()

        while True:
            if add == "1":
                asg = input("Please eneter a task to add : ")
                urg = input("Please set priority from selection : [high, med, low] : ")

                task = Task(asg, urg)
                print(f"{task} has been added")
                tasks.append(task)

            elif add != "1" and add != "q":
                print("Invalid input, please try again")
            elif userinput == "q":
                break

    if userinput == "2"
        