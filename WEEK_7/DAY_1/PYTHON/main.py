# int, float, bool, complex
# list, tuple, range, bytes, bytesarray
# set, frozen set
# dict
# nonetype

# append, pop, add, remove, copy, sort, clear, count, index, reverse, extend
# copy, count, index

# def lstRev(lst):
#     newlst = []
#     for i in lst[::-1]:
#         newlst.append(i)
#     return  newlst

# lst = [1, 2, 3, 4, 5, 3, 2, 2]
# newlst = lstRev(lst)
# print(lst)
# print(newlst)

# iterator

# lst = [1, 2, 4, 5, 5, 56]
# iterator = iter(lst)
# print(next(iterator))
# print(next(iterator))
# print(next(iterator))
# print(next(iterator))

# decorators

# def multiply(add):
#     def wrapper(*args, **kwargs):
#         print("START")
#         result = add(*args, **kwargs)
#         print("END")
#         return result
#     return wrapper

# @multiply
# def add(a, b):
#     return(a + b)


# sum = add(10, 20)
# print(sum)


# decorator 2
# def decorateGreet(greet):
#     def wrapper():
#         print("Hello User")
#         greet()
#         print("Byee User")
#         return
#     return wrapper

# @decorateGreet
# def greet():
#     print("Good Morning")

# greet()


# requests
import requests
import pprint
def gettingUserData():
    url = "http://localhost:3000/users"
    user_data = requests.get(f"{url}")
    return user_data

def postingUserData():
    new_data = {
        'email': 'newUser@gmail.com',
        'first_name': 'new',
        'id': '112211221122',
        'last_name': 'user',
        'password': '@NewUser123'
    }
    url = "http://localhost:3000/users"
    user_data = requests.post(f"{url}", json=new_data)
    print("DATA POSTED SUCCESSFULLY")
    return user_data

postingUserData()
user_data = gettingUserData().json()
for data in user_data:
    print(data)
print(user_data)
