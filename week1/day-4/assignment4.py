def print_contacts(contacts):
    for contact in contacts:
        print(f'{contact["first_name"]} {contact["last_name"]}: {contact["phone"]}')
phone_book = {
    'title':
    "Yellow Pages",
    'published_date':
    1980,
    'contacts': [
        {
            'first_name': 'Josh',
            'last_name': 'Medeski',
            'phone': 2810000000,
        },
        {
            'first_name': 'Josh',
            'last_name': 'Smith',
            'phone': 2810000001,
        },
        {
            'first_name': 'Ricky',
            'last_name': '',
            'phone': 7130000000
        },
    ]
}
print('All Contacts')
print_contacts(phone_book['contacts'])
print('---------------')
for contact in phone_book['contacts']:
    if contact["first_name"] == "Ricky":
        print(f'{contact["first_name"]}: {contact["phone"]}')
def find_by_first_name(first_name):
    for contact in phone_book['contacts']:
        if contact["first_name"] == first_name:
            return (f'{contact["first_name"]}: {contact["phone"]}')
    else:
        return f"There is no one with the name '{first_name}'"
# first_name_query = input('Who do you want to search for (first name)? ')
# print(find_by_first_name(first_name_query))
def find_contacts_by_first_name(contacts, first_name_query):
    # Create empty list to put items into when found
    results = []
    # Find all contacts with matching first name
    # Put found items in the `results` list
    for contact in contacts:
        if contact['first_name'] == first_name_query:
            results.append(contact)
    # return the results
    return results
first_name_query_results = find_contacts_by_first_name(
    phone_book['contacts'], input("Search by first name: "))

print('Search results')
print_contacts(first_name_query_results)
print('----------')