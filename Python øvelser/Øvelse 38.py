

num = int(input("Indtast tal: "))
divisors = []

def isprime(num):
    divisors2 = []
    for i in range(1, int(num / 2 + 1)):
        if num % i == 0:
            divisors2.append(i)

    if len(divisors2) == 1:
        return True
    else:
        return False


for i in range(1, int(num/2+1)):
    if num % i == 0:
        divisors.append(i)

if len(divisors) == 1:
    print(num, "er et primtal!")
else:
    print(num, "er ikke et primtal, da den har divisorerne:")
    print(str(divisors)[1:-1])


primedivisors = []
for element in divisors:
    if isprime(element) == True:
        primedivisors.append(element)

if len(primedivisors)!=0:
    print("Det højeste primtal, der går op i", num, "er", primedivisors[-1])