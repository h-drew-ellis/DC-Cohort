while True:

    name = input("what is your name? or press q to quit. : ")
    answer = input("why do you like programming? : ")

    survey = {"name" : name, "Answers" : answer}

    if name == "q":
        break

    with open("names.txt", "a") as file:
        file.write(survey)