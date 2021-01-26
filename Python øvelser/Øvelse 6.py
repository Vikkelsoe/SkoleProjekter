
fibo = [0, 1]
amount = 100

for i in range(amount):
    a =  fibo[-1] + fibo[-2]
    fibo.append(a)

for element in fibo:
    print(element)

