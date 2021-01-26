
end = int(input("Optil hvilken multiplikationstabel vil generere? "))
amount = int(input("Hvor mange tal vil du se i hver multiplikationstabel? "))
counter1 = 1
counter2 = 1

tabel = []

for i in range(end):
    for i in range(amount):
        tabel.append(counter1*counter2)
        counter2 += 1
        print(tabel[-1],end=" ")
    counter1 += 1
    counter2 = 1
    print("")

