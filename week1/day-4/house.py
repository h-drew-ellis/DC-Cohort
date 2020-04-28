house = {
    'price' : '$250000',
    'BR' : 5,
    'BA' : 2.5,
    'size' : { 'interior' : '1300sqft', 'lot-size' : '.3 a' },
    'address' : '555 Middle of Nowhere Dr, Pinewoods, Atropia '

}

print(house.get('BA'))

house.update(year_built = '1990')

print(house)
house['size']['interior'] = '2750sqft'
print(house['size']['interior'], house['size']['lot-size'])

print(list(house.keys()))















