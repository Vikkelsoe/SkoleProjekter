from random import choice

roundCount = 0
win = False

#definerer spillebrættet
board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

#funktion, der printer spillebrættet
def printBoard():
    print("")
    print(board[0], "|", board[1], "|", board[2])
    print("__________")
    print(board[3], "|", board[4], "|", board[5])
    print("__________")
    print(board[6], "|", board[7], "|", board[8])
    print("")


#funktion, der lader spillen lave et træk
def makePlayerMove():
    global roundCount
    playerTurn = True
    while playerTurn == 1:
        move = int(input("Indtast dit træk [1-9]: "))
        if board[move - 1] == " ":
            board[move - 1] = "O"
            playerTurn = False
            roundCount += 1
            printBoard()
            winCehck()
        else:
            print("Dette er ikke et muligt træk.")


#funktion, der lader computeren trække
def computerMove():
    global roundCount
    possibleMoves = []
    for i in range(len(board)):
        if board[i] == " ":
            possibleMoves.append(i)

    board[choice(possibleMoves)] = "X"
    roundCount += 1
    printBoard()
    winCehck()

#funktion, der tjekker, om der er en vinder
def winCehck():
    global roundCount
    global win

    #vandrette tjek
    if (board[0] == "X" or board[0] == "O") and board[0] == board[1] == board[2]:
        win = True
    if (board[3] == "X" or board[3] == "O") and board[3] == board[4] == board[5]:
        win = True
    if (board[6] == "X" or board[6] == "O") and board[6] == board[7] == board[8]:
        win = True

    #lodrette tjek
    if (board[0] == "X" or board[0] == "O") and board[0] == board[3] == board[6]:
        win = True
    if (board[1] == "X" or board[1] == "O") and board[1] == board[4] == board[7]:
        win = True
    if (board[2] == "X" or board[2] == "O") and board[2] == board[5] == board[8]:
        win = True

    #diagonale tjek
    if (board[0] == "X" or board[0] == "O") and board[0] == board[4] == board[8]:
        win = True
    if (board[2] == "X" or board[2] == "O") and board[2] == board[4] == board[6]:
        win = True

    #tjekker hvem der vinder
    if win == True:
        if roundCount % 2 == 1:
            print("Du vandt!")
        else:
            print("Computeren vandt.")


printBoard()
while roundCount < 9 and win == False:
    makePlayerMove()
    if roundCount<9 and win == False:
        computerMove()