tekst = str(input("Indtast streng: "))
mellemrum = 0

for c in tekst:
    if c == " ":
        mellemrum += 1

print("Der er", mellemrum, "mellemrum i teksten.")