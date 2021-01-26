import matplotlib.pyplot as plt

file = open("Stats.txt", "r")

x = []
y = []
data = []

counter = 0
totalWins = 0
totalLoses = 0

for c in file:
    statsString = open("Stats.txt").readline()
    stats = statsString.split(',')
    data = list(map(int, stats))

for element in data:
    if element == 1:
        counter += 1
        totalWins += 1
    elif element == 0:
        counter += 1
        totalLoses += 1

    x.append(counter)
    y.append(totalWins-totalLoses)

print("Der er spillet",counter,"spil.")
plt.plot(x,y)
plt.show()