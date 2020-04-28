with open("emails.txt") as file:
    content = file.read()

emails = content.split(",")
duplicateFreeEmails = []

for individualEmails in emails:
    if individualEmails not in duplicateFreeEmails
        duplicateFreeEmails.append(individual_email)

print(duplicate_free_emails)