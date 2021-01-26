odds1 = float(input("Indtast odds 1: "))
odds2 = float(input("Indtast odds 2: "))

try1 = 0

solution1 = []
solution2 = []
profit = []

for i in range(100):
    try1+=1
    try2 = 0
    for i in range(100):
        try2 += 1

        if try1 * odds1 - try1 - try2 > 0 and try2 * odds2 - try1 - try2 > 0:
            profit.append((try1 * odds1 - try1 - try2 + try2 * odds2 - try1 - try2)/2)
            solution1.append(try1)
            solution2.append(try2)

if len(profit) == 0:
    print("Ingen favorable bets fundet på disse odds.")
else:
    indp = profit.index(max(profit))
    ind1 = solution1.index(max(solution1))
    ind2 = solution2.index(max(solution2))

    print("\nBedse bet:")
    print("nBet på odds 1: ",solution1[indp])
    print("Bet på odds 2: ",solution2[indp])
    print("Profit på odds 1: ", solution1[indp] * odds1 - solution1[indp] - solution2[indp])
    print("Profit på odds 2: ", solution2[indp] * odds2 - solution1[indp] - solution2[indp])

    print("\nBedse bet ift. odds 1:")
    print("Bet på odds 1: ",solution1[ind1])
    print("Bet på odds 2: ",solution2[ind1])
    print("Profit på odds 1: ", solution1[ind1] * odds1 - solution1[ind1] - solution2[ind1])
    print("Profit på odds 2: ", solution2[ind1] * odds2 - solution1[ind1] - solution2[ind1])

    print("\nBedse bet ift. odds 2:")
    print("Bet på odds 1: ",solution1[ind2])
    print("Bet på odds 2: ",solution2[ind2])
    print("Profit på odds 1: ", solution1[ind2] * odds1 - solution1[ind2] - solution2[ind2])
    print("Profit på odds 2: ", solution2[ind2] * odds2 - solution1[ind2] - solution2[ind2])
