from random import randint
import matplotlib.pyplot as plt

#startsaldoen
saldo = 25000
lastGame = 1
lastGameBet = int

y = []

for i in range(10000):
    if saldo <= 0:
        break

    #tager 0 med, som er kasinoens felt
    number = randint(0,36)

    #styrer bet
    if lastGame == 1:
        bet = 1
    else:
        bet = lastGameBet * 2

    lastGameBet = bet
    saldo -= bet

    #gevinst hvis number er ulige
    if number % 2 != 0:
        saldo = saldo + bet * 2
        lastGame = 1
    else:
        lastGame = 0

    y.append(saldo)

print(saldo)

x = [i for i in range(1,len(y)+1)]

plt.plot(x,y)
plt.show()
