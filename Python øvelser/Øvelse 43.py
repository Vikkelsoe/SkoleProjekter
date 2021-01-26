import matplotlib.pyplot as plt

data = [2,3,5,7,9,3,1,2,4,6,8,8,8,9,3] #de indkomne data
obsv = [] #observationsværdierne
hyp = [] #hyppighederne
fre = [] #frekvenser
sfre = [] #summeret frekvens

#udtræk observationerne fra data
for element in data:
    if element not in obsv:
        obsv.append(element)

obsv.sort()


#beregn hyppigheder
for i in range(len(obsv)):
    count = 0
    for element in data:
        if element == obsv[i]:
            count += 1
    hyp.append(count)


#bergen frekvenser
for i in range(len(hyp)):
    fre.append(round(hyp[i]/sum(hyp), 3))


#beregn summerede frekvenser
for i in range(len(fre)):
    sfre.append(round(sum(fre[0:i+1]), 3))



#print endelig tabel

print("Obs\t| Hyp\t| Frekvens\t| Sum. frekvens")
print("_____________________________________")

for i in range(len(obsv)):
    print(obsv[i], "\t|\t", hyp[i], "\t|\t", fre[i], "\t|\t", sfre[i])
    print("_____________________________________")


#lav plot
plt.subplot(2,1,1)
plt.bar(obsv,fre, align='center', alpha=0.5, width=0.05)

plt.subplot(2,1,2)
plt.step(obsv, sfre)
plt.show()


