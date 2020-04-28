import datetime as dt 
from datetime import tzinfo, timedelta, datetime

tz_string = dt.datetime.now(dt.timezone.utc).astimezone().tzname() 

print("datetime.now() ) 
  
