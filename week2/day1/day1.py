"""
class Table:
    def __init__(self, width, height):
        self.height = height
        self.length = ""
        self.width = width
        self.material = ""
        self.color = ""
        self.size_type = ""
        self.price = ""

table = Table(100, 100)
    self.length = "100"
    self.material = "Mahoganey"
    self.color = "Mahoganey"
    self.size_type = "Dinner"
    self.price = "$1250"
    """

#Creating a Class
class Car:
    def __init__(self, make, model): #initializer/constructor
        #(self, make, model) requirement example
        #define properties of the car
        self.make = make
        self.model = model
        self.color = "White" #sets default color value to white
        self.vin = ""

    def putFuel(self):
        print("Put gasoline in car...")

    def updateColor(self, color):
        #check if the color is available
        #then apply the color
        self.color = color

    def drive(self):
        print("driving....")

    def changeGear(self, gearNo):
        print(f"chaging gear to {gearNo}")

    def brake(self):
        print("Brake")

class electricCar(Car): #inheritence; electricCar is inheriting from Car class
    def __init__(self, make, model):
        super().__init__(make, model) #call initializer of the :super == parent: (Car) class

tesla = electricCar("Tesla", ("Model 3"))
print(tesla.make)