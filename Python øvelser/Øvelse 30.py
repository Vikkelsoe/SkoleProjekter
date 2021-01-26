
løn = {'Niels': 85000, 'Peter':40000, 'Jakob':90000, 'Poul':100000, 'Dorte':40000}

for key,value in løn.items():
    print(key,value)

print("")

if 'Bente' in løn:
    print("Bente findes i lønlisten.")
else:
    print("Bente findes ikke i lønlisten.")


print("")

for key,value in løn.items():
    print(key)

print("")

for key,value in løn.items():
    print(value)

print("")

sum = 0
for key,value in løn.items():
    sum += value

average = sum/len(løn)

print("Gennemsnit:", average)

print("")

d = dict()

for key,value in løn.items():
    if value in d:
        d[value] = d[value]+1
    else:
        d[value] = 1

print(d)

print("")

min = average
max = average
for key,value in løn.items():
    if value > max:
        max = value
    elif value < min:
        min = value

print("Mindsteværdi",min)
print("Størsteværdi",max)

print("")

e = dict()

for key,value in løn.items():
    if value in e:
        e[value].append(key)
    else:
        e[value] = [key]

print(e)