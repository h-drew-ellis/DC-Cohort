if self.status == "1"
    self.startTime.update({%H:%M}.format(datetime.datetime.now()))
if self.status == "0"
    self.endTime.update({%H:%M}.format(datetime.datetime.now()))
    self.totalTime = (self.endTime - self.startTime)
    self.totalTime.update
    print(tx)

    def print_pool_table_title():

  print("---------------------------")
  print("-- DC Pool Table Manager --")
  print("---------------------------")

def pool_table_menu():
  print("Press [1] to View Pool Tables")
  print("Press [2] to Occupy Pool Table")
  print("Press [3] to Un-Occupy Pool Table")
  print("Press [q] to Quit")

print_pool_table_title()
user_input = ""
tables = []
while user_input != "q":
  pool_table_menu()
  user_input = input("What would you like to do? ")
  if user_input == "1":
    print("---------------------")
    print("---- Pool Tables ----")
    print("---------------------")
    for table in range(0, 13):
      print(f"Table {table+1}")
    print("---------------------")
  elif user_input == "2":
    occupy_input = input(
      "Type in number of pool table you would like to occupy. ")

      for index in (1, 13)