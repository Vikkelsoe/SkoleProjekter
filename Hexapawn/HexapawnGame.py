from numpy.random import choice

directory = r'C:\Users\Bruger\Documents\1.g\Programmering (skole)\Hexapawn'

roundCount = 0
win = False

#definerer spillebrættet
board = ["X", "X", "X", " ", " ", " ", "O", "O", "O"]

#en log, der holder styr på, hvad computeren gør
computerLog = []

#en liste med alle stats for alle cases
case1 = []
case2 = []
case3 = []
case4 = []
case5 = []
case6 = []
case7 = []
case8 = []
case9 = []
case10 = []
case11 = []
case12 = []
case13 = []
case14 = []
case15 = []
case16 = []
case17 = []
case18 = []
case19 = []
case20 = []
case21 = []
case22 = []
case23 = []
case24 = []

cases = [case1, case2, case3, case4, case5, case6, case7,
         case8, case9, case10, case11, case12, case13, case14,
         case15, case16, case17, case18, case19, case20, case21,
         case22, case23, case24]

#funktion, der åbner alle case-filer og gemmer deres data i forskellige variabler
def openCases():
    global cases
    counter = 0
    for i in range(1,25):
        filename = "case"+str(i)+".txt"
        statsString = open(filename).readline()
        stats = statsString.split(',')
        cases[counter] = list(map(int, stats))
        counter += 1

#funktion, der opdaterer alle filer med de nye resultater efter endt spil
def updateCases():
    global win
    global case

    if win == "Player":
        for i in range(len(computerLog)):
            cases[computerLog[i][0] - 1][computerLog[i][1] - 1] -= 1

    for i in range(1,25):
        filename = "case"+str(i)+".txt"
        file = open(filename, "w")
        file.write(str(cases[i-1][0]) + "," + str(cases[i-1][1]) + "," + str(cases[i-1][2]) + "," + str(cases[i-1][3]))
        file.close()

#funktion, der printer spillebrættet
def printBoard():
    print("")
    print(board[0], "|", board[1], "|", board[2])
    print("__________")
    print(board[3], "|", board[4], "|", board[5])
    print("__________")
    print(board[6], "|", board[7], "|", board[8])
    print("")

#funktion, der undersøger case
def findCase(board):

    global caseCheck

    if board == ["X", "X", "X", "O", " ", " ", " ", "O", "O"] or board == ["X", "X", "X", " ", " ", "O", "O", "O", " "]:
        case = 1
    elif board == ["X", "X", "X", " ", "O", " ", "O", " ", "O"]:
        case = 2
    elif board == [" ", "X", "X", "X", "O", "O", "O", " ", " "] or board == ["X", "X", " ", "O", "O", "X", " ", " ", "O"]:
        case = 3
    elif board == [" ", "X", "X", " ", "X", "O", "O", " ", " "] or board == ["X", "X", " ", "O", "X", " ", " ", " ", "O"]:
        case = 4
    elif board == ["X", "X", " ", "O", " ", "O", " ", " ", "O"] or board == [" ", "X", "X", "O", " ", "O", "O", " ", " "]:
        case = 5
    elif board == ["X", " ", "X", "O", " ", " ", " ", " ", "O"] or board == ["X", " ", "X", " ", " ", "O", "O", " ", " "]:
        case = 6
    # case 7 laves ikke, da det blot er en spejling af case 3
    elif board == ["X", " ", "X", "O", "O", " ", " ", "O", " "] or board == ["X", " ", "X", " ", "O", "O", " ", "O", " "]:
        case = 8
    elif board == [" ", "X", "X", "O", "X", " ", " ", " ", "O"] or board == ["X", "X", " ", " ", "X", "O", "O", " ", " "]:
        case = 9
    elif board == [" ", "X", "X", " ", "O", " ", " ", " ", "O"] or board == ["X", "X", " ", " ", "O", " ", "O", " ", " "]:
        case = 10
    elif board == ["X", " ", "X", "X", "O", " ", " ", " ", "O"] or board == ["X", " ", "X", " ", "O", "X", "O", " ", " "]:
        case = 11
    elif board == ["X", " ", "X", "X", " ", "O", " ", "O", " "] or board == ["X", " ", "X", "O", " ", "X", " ", "O", " "]:
        case = 12
    elif board == [" ", "X", "X", " ", "O", " ", "O", " ", " "] or board == ["X", "X", " ", " ", "O", " ", " ", " ", "O"]:
        case = 13
    elif board == [" ", "X", " ", "X", "O", "O", " ", " ", " "] or board == [" ", "X", " ", "O", "O", "X", " ", " ", " "]:
        case = 14
    elif board == ["X", " ", " ", "X", "O", " ", " ", " ", " "] or board == [" ", " ", "X", " ", "O", "X", " ", " ", " "]:
        case = 15
    elif board == ["X", " ", " ", "X", "X", "O", " ", " ", " "] or board == [" ", " ", "X", "O", "X", "X", " ", " ", " "]:
        case = 16
    elif board == ["X", " ", " ", "O", "O", "O", " ", " ", " "] or board == [" ", " ", "X", "O", "O", "O", " ", " ", " "]:
        case = 17
    #case 18 laves ikke, da det blot er en spejling af case 16
    elif board == [" ", "X", " ", "O", "X", " ", " ", " ", " "] or board == [" ", "X", " ", " ", "X", "O", " ", " ", " "]:
        case = 19
    elif board == [" ", " ", "X", "X", "O", " ", " ", " ", " "] or board == ["X", " ", " ", " ", "O", "X", " ", " ", " "]:
        case = 20
    # case 21 laves ikke, da det blot er en spejling af case 15
    # case 22 laves ikke, da det blot er en spejling af case 14
    elif board == [" ", " ", "X", "X", "X", "O", " ", " ", " "] or board == ["X", " ", " ", "O", "X", "X", " ", " ", " "]:
        case = 23
    # case 24 laves ikke, da det blot er en spejling af case 19

    return(case)

#funktion, der finder trækket
def findMove(case):
    total = 0
    probabilities = []

    for i in cases[(case-1)]:
        total += int(i)

    for i in cases[(case-1)]:
        probabilities.append(int(i) / total)

    move = int(choice([1, 2, 3, 4], 1, p=probabilities))

    return(move)

#funktion, der udfører trækket
def makeMove(move,case):
    global board

    if case == 1:
        if move == 1 and board[3] == "O":
            board[1] = " "
            board[3] = "X"
        elif move == 1 and board[5] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 2:
            board[1] = " "
            board[4] = "X"
        elif move == 3 and board[3] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 3 and board[5] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 2:
        if move == 1:
            board[0] = " "
            board[3] = "X"
        elif move == 2:
            board[0] = " "
            board[4] = "X"

    elif case == 3:
        if move == 1 and board[6] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 1 and board[8] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 2 and board[6] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 2 and board[8] == "O":
            board[1] = " "
            board[3] = "X"

    elif case == 4:
        if move == 1 and board[6] == "O":
            board[4] = " "
            board[6] = "X"
        elif move == 1 and board[8] == "O":
            board[4] = " "
            board[8] = "X"
        elif move == 2:
            board[4] = " "
            board[7] = "X"
        elif move == 3 and board[6] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 3 and board[8] == "O":
            board[1] = " "
            board[3] = "X"

    elif case == 5:
        if move == 1 and board[8] == "O":
            board[1] = " "
            board[3] = "X"
        elif move == 1 and board[6] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 2:
            board[1] = " "
            board[4] = "X"
        elif move == 3 and board[8] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 3 and board[6] == "O":
            board[1] = " "
            board[3] = "X"

    elif case == 6:
        if move == 1 and board[8] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 1 and board[6] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 7:
        if move == 1 and board[8] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 1 and board[6] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 2 and board[8] == "O":
            board[1] = " "
            board[3] = "X"
        elif move == 2 and board[6] == "O":
            board[1] = " "
            board[5] = "X"

    elif case == 8:
        if move == 1 and board[3] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 1 and board[5] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 2 and board[3] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 2 and board[5] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 3 and board[3] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 3 and board[5] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 9:
        if move == 1 and board[2] == "X":
            board[1] = " "
            board[3] = "X"
        elif move == 1 and board[0] == "X":
            board[1] = " "
            board[5] = "X"
        elif move == 2:
            board[4] = " "
            board[7] = "X"
        elif move == 3 and board[2] == "X":
            board[4] = " "
            board[8] = "X"
        elif move == 3 and board[0] == "X":
            board[4] = " "
            board[6] = "X"
        elif move == 4 and board[2] == "X":
            board[2] = " "
            board[5] = "X"
        elif move == 4 and board[0] == "X":
            board[0] = " "
            board[3] = "X"

    elif case == 10:
        if move == 1 and board[8] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 1 and board[6] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 2 and board[8] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 2 and board[6] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 11:
        if move == 1 and board[8] == "O":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[6] == "O":
            board[5] = " "
            board[8] = "X"
        elif move == 2 and board[8] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 2 and board[6] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 3 and board[8] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 3 and board[6] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 4 and board[8] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 4 and board[6] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 12:
        if move == 1 and board[5] == "O":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[3] == "O":
            board[5] = " "
            board[8] = "X"
        elif move == 2 and board[5] == "O":
            board[3] = " "
            board[7] = "X"
        elif move == 2 and board[3] == "O":
            board[5] = " "
            board[7] = "X"

    elif case == 13:
        if move == 1 and board[6] == "O":
            board[2] = " "
            board[4] = "X"
        elif move == 1 and board[8] == "O":
            board[0] = " "
            board[4] = "X"
        elif move == 2 and board[6] == "O":
            board[2] = " "
            board[5] = "X"
        elif move == 2 and board[8] == "O":
            board[0] = " "
            board[3] = "X"

    elif case == 14:
        if move == 1 and board[3] == "X":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[3] == "O":
            board[5] = " "
            board[8] = "X"
        elif move == 2 and board[3] == "X":
            board[1] = " "
            board[5] = "X"
        elif move == 2 and board[3] == "O":
            board[1] = " "
            board[3] = "X"

    elif case == 15:
        if move == 1 and board[3] == "X":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[3] == " ":
            board[5] = " "
            board[8] = "X"
        elif move == 2 and board[3] == "X":
            board[0] = " "
            board[4] = "X"
        elif move == 2 and board[3] == " ":
            board[2] = " "
            board[4] = "X"

    elif case == 16:
        if move == 1 and board[3] == "X":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[3] == "O":
            board[5] = " "
            board[8] = "X"
        elif move == 2:
            board[4] = " "
            board[7] = "X"

    elif case == 17:
        if move == 1 and board[0] == "X":
            board[0] = " "
            board[4] = "X"
        elif move == 1 and board[2] == "X":
            board[2] = " "
            board[4] = "X"

    elif case == 19:
        if move == 1 and board[3] == "O":
            board[1] = " "
            board[3] = "X"
        elif move == 1 and board[5] == "O":
            board[1] = " "
            board[5] = "X"
        elif move == 2:
            board[4] = " "
            board[7] = "X"

    elif case == 20:
        if move == 1 and board[3] == "X":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[5] == "X":
            board[5] = " "
            board[8] = "X"
        elif move == 2 and board[3] == "X":
            board[2] = " "
            board[4] = "X"
        elif move == 2 and board[5] == "X":
            board[0] = " "
            board[4] = "X"
        elif move == 3 and board[3] == "X":
            board[2] = " "
            board[5] = "X"
        elif move == 3 and board[5] == "X":
            board[0] = " "
            board[3] = "X"

    elif case == 23:
        if move == 1 and board[5] == "O":
            board[3] = " "
            board[6] = "X"
        elif move == 1 and board[3] == "O":
            board[5] = " "
            board[8] = "X"
        elif move == 2:
            board[4] = " "
            board[7] = "X"


#funktion, der lader spillen lave et træk
def makePlayerMove():
    global roundCount
    playerTurn = True
    while playerTurn == 1:
        moveFrom = int(input("Indtast hvilken brik, der skal rykkes [1-9]: "))
        moveTo = int(input("Indtast hvorhen brikken skal rykkes [1-9]: "))
        if board[moveFrom - 1] == "O" and (board[moveTo - 1] == " " or board[moveTo - 1] == "X"):
            board[moveFrom - 1] = " "
            board[moveTo - 1] = "O"
            playerTurn = False
            roundCount += 1
            printBoard()
            winCehck()
        else:
            print("Dette er ikke et muligt træk.")


#funktion, der lader computeren trække
def computerMove():
    global roundCount
    global computerLog

    case = findCase(board)
    move = findMove(case)
    makeMove(move,case)

    computerLog.append([case,move])

    roundCount += 1
    printBoard()
    winCehck()

#funktion, der tjekker, om der er en vinder
def winCehck():
    global roundCount
    global win
    global case
    global board

    #tjekker om en bonde er på bagerste række
    if board[0] == "O" or board[1] == "O" or board[2] == "O":
        win = True
    if board[6] == "X" or board[7] == "X" or board[8] == "X":
        win = True

    #tjekker om alle bønder er låst
    locked = 0
    countX = 0

    for i in range(6):
        if board[i] == "X":
            countX += 1
        if board[i] == "X" and board[i+3] == "O" and board != [" ", "X", "X", "X", "O", "O", "O", " ", " "] and board != ["X", "X", " ", "O", "O", "X", " ", " ", "O"] and board != ["X", " ", " ", "O", "O", "O", " ", " ", " "] and board != [" ", " ", "X", "O", "O", "O", " ", " ", " "]:
            locked += 1

    if locked == countX:
        win = True

    #tjekker om alle bønder er taget
    if "X" not in board:
        win = True
    if "O" not in board:
        win = True



    #tjekker hvem der vinder
    if win != False:
        if roundCount % 2 == 1:
            print("Du vandt!")
            win = "Player"
        else:
            print("Computeren vandt.")
            win = "Computer"


openCases()
printBoard()
while roundCount < 7 and win == False:
    makePlayerMove()
    if roundCount < 7 and win == False:
        computerMove()

#nedskriver resultat i stats.txt
file = open("Stats.txt", "r")
stats = []
for x in file:
    stats.append(x)

if win == "Player":
    stats.append(",0")
elif win == "Computer":
    stats.append(",1")

file = open("Stats.txt", "w")

for x in stats:
    file.write(x)
file.close()

#opdater case-filerne
updateCases()