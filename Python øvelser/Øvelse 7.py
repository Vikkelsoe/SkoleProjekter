
tekst1 = "Der var engang"
tekst2 = "en mand som"
tekst3 = "boede i en spand. Spanden var af ler."

print(tekst1,tekst2,tekst3)

def length(tekst):
    counter = 0
    for c in tekst:
        counter += 1
    return counter

def versaler(tekst):
    nytekst = []
    for c in tekst:
        nytekst.append(c.upper())
    return(nytekst)

def ecount(tekst):
    counter = 0
    for c in tekst:
        if c == "e" or c == "E":
            counter += 1
    return(counter)

print("\nI tekst 1 er der", length(tekst1), "tegn.")
print("I tekst 2 er der", length(tekst2), "tegn.")
print("I tekst 3 er der", length(tekst3), "tegn.")

print("\nI tekst 1 er det andet bogsatv", tekst1[1])
print("I tekst 2 er det andet bogsatv", tekst2[1])
print("I tekst 2 er det andet bogsatv", tekst3[1])

print("")

if tekst1 == tekst2 or tekst1 == tekst3 or tekst2 == tekst3:
    print("To af teksterne er ens.")
else:
    print("Ingen af teksterne er ens.")


print("")

print("".join(versaler(tekst1)))
print("".join(versaler(tekst2)))
print("".join(versaler(tekst3)))

print("")

deltekst = tekst1[0:3]
print(deltekst)

sammenflet = []

i = 0
while i < 11:
    sammenflet.append(tekst1[i])
    sammenflet.append(tekst2[i+1])
    sammenflet.append(tekst3[i+2])
    i += 3

print("".join(sammenflet))

print("\nI teksten er der", (ecount(tekst1)+ecount(tekst2)+ecount(tekst3)), "e'er.")