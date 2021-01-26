tekst = input("Indtast en tekststreng: ")

streng = list()

for c in tekst:
    c = c.lower()
    streng.append(c)

streng.sort()

bogstavDict = dict()


for c in streng:
    if c in bogstavDict:
        bogstavDict[c] += 1
    else:
        bogstavDict[c] = 1

for key,value in bogstavDict.items():
    print(key,value)