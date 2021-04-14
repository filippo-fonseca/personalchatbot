import enum


# class Brain(enum.Enum):
#     possibleCalculations = ["diameter", "area", "circumference"]
#     pi = 3.14159265359


class MotionCalc():
    def __init__(self, calculation, radius):
        self.calculation = calculation,
        self.radius = radius

    def calculate(self):
        i = 0
        while i > len(self.calculation):
            if self.calculation == "diameter":
                return "Bruh."


motionCalc = MotionCalc("diameter", 8).calculate()

print(motionCalc)
