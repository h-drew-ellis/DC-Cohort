Dict = {'1' : input('Please provide your first name :'), 
    '2' : input('Please provide your last name :'), 
    '3' : { 'a' : 'Hello!, ', 'b' : ', and welcome to', 'c' : 'dictionaries in python!'}}

print(Dict['3']['a'], Dict['1'], Dict['2'], Dict['3']['b'], Dict['3']['c'])

def op1() :
    userinput = input("What would you like to add? :")
    dict.update(userinput)
op1()
print(Dict['3']['a'], Dict['1'], Dict['2'], Dict['3']['b'], Dict['3']['c'])