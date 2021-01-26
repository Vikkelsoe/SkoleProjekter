passw = str(input("Indtast dit password: "))

versal = 0
lille = 0
tal = 0


if len(passw) < 8:
    print("Dit password skal være 8 karakterer langt.")

for element in passw:
    if element.isupper():
        versal += 1
        break

for element in passw:
    if element.islower():
        lille += 1
        break

for element in passw:
    if element in ["1", "2", "3", "4", "5","6", "7", "8", "9", "0"]:
        tal += 1
        break

if versal == 0:
    print("Dit password skal indeholde et stort bogstav.")

if lille == 0:
    print("Dit password skal indeholde et lille bogstav.")

if tal == 0:
    print("Dit password skal indeholde et tal.")