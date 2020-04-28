import json
from datetime import datetime

data = []
#As an admin you should be able to see all the tables (12) 
class Tables:
    def __init__(self, number):
        self.number = number
        self.status = "Unoccuppied"
        self.startTime = None
        self.endTime = None
        self.totalTime = None


for index in (1, 13):
    table = Tables(index + 1)
    data.append(table)


def statusUpdate(Tables):
    status = input("Please prees '1' to occupy table or '0' unoccupy")
    
    if status == "1":
        Tables.status = "OCCUPIED"
        Tables.startTime = datetime   

    if status == "0":
        Tables.status = "NOT OCCUPIED"
        
#- As an admin each table in the list should show, whether the table is OCCUPIED or NOT OCCUPIED. 


#- As an admin if the table is OCCUPIED then show the start time of the table, number of minutes played. 
# (Hardmode - If the minutes are > 60 then show them in terms of hours) 

#- As an admin you can only give out the tables that are NOT OCCUPIED. 
# This means if pool table 8 is occupied and you try to give it out then 
# the app will print a message saying "Pool Table 8 is currently occupied". 

#- As an admin whenever I close the table it should write an entry in the text 
# file / json file. The file should be named in the following format: 
# (11-22-2017.txt or 11-22-2017.json) keeping track of all the tables. 
 

# The entry can consists of the following information: 

#Pool Table Number 

#Start Date Time

#End Date Time 

#Total Time Played 

#Cost (if you are doing the hard mode) 
