import math

expected_scoreA = 0
expected_scoreB = 0
scoreA = 0
scoreB = 0
ratingA = 0
ratingB = 0

def match():
    scoreA = 200
    scoreB = 100

  
def getPlayerARating(a, b):
    expected_scoreA = 1.0 * 1.0 / (1 + 1.0 * math.pow(10, 1.0 * (b - a) / 400))
    return expected_scoreA

def getPlayerBRating(a, b):
    expected_scoreB = 1.0 * 1.0 / (1 + 1.0 * math.pow(10, 1.0 * (a - b) / 400))
    return expected_scoreB

def playerAWins():
    ratingA + 16 * (scoreA - expected_scoreA)

def playerBWins():
    ratingB + 16 * (scoreB - expected_scoreB)
 
def combine(a, b):
    if (getPlayerARating(a, b) > getPlayerBRating(a, b)):
        print("Player A wins. 🎉")
    elif (getPlayerARating(a, b) == getPlayerBRating(a, b)):
        print("Draw.")
    else:
        print("Player B wins! 🎉")

combine(ratingA, 500)


