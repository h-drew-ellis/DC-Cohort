import json
import datetime

def format_seconds(time, seconds_offset):
  formated_time = datetime.datetime.fromtimestamp(time.total_seconds() - seconds_offset).strftime('%H:%M:%S')
  return formated_time

allTables = []

class Tables:
    def __init__(self, tablenum):
        self.tablenum = tablenum
        self.status = "Unoccupied"
        self.dtgStart = None
        self.dtgStop = None

for index in range(1, 13):
    table = Tables(index + 1)
    allTables.append(table)

for table in Tables():
    print(f'Table:{tablenum}, Status:{status}')