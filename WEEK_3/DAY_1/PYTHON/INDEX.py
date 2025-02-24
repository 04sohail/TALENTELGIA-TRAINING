

def primeNumbers(lst):
    prime = []
    for i in lst:
        for j in range(2, i):
            if i % j == 0:
                print(i)
            else:
                prime.append(i)
    return prime




    
print(primeNumbers(range(1, 11)))
