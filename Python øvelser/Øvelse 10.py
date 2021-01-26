
sex = input("Er du en mand eller kvinde (m/k)? ")
weight = float(input("Hvor meget vejer du [kg]? "))
height = float(input("Hvor høj er du [cm]? "))
age = int(input("Hvor gammel er du? "))
activity = input("\nVælg din aktivitet: \nStilelsidende (1) \nLet aktiv (2) \nModerat aktiv (3) \nMeget aktiv (4) \nEkstremt aktiv (5) \nHvor aktiv er du? ")

if sex == "m":
    bmr = round(10*weight+6.25*height-5*age+5, 2)
elif sex == "k":
    bmr = round(10*weight+6.25*height-5*age-161, 2)
else:
    print("Der blev lavet en indtastningsfejl")


if activity == "1":
    abmr = round(bmr * 1.2, 2)
elif activity == "2":
    abmr = round(bmr * 1.375, 2)
elif activity == "3":
    abmr = round(bmr * 1.55, 2)
elif activity == "4":
    abmr = round(bmr * 1.725, 2)
elif activity == "5":
    abmr = round(bmr * 1.9, 2)

bigm = int(abmr/257.2)
ban = int(abmr/86)
dad = int(abmr/2.82)


print("\nDit BMR er %s kalorier. Det er det antal kalorier, du cirka forbrænder, hvis du sidder helt stille en hel dag." %bmr)
print("Hvis der tages højde for dit aktivitetsniveau, forbrænder du %s kalorier." %abmr)
print("\nDet vil sige du kan indtage:")
print("Ca. %i Big Mac's, eller" %bigm)
print("ca. %i bananer, eller" %ban)
print("Ca. %i gram dadler." %dad)



