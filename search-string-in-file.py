string = "dubing"

with open("testing.txt") as myfile:
    for num, line in enumerate(myfile, 1):
        if string in line:
            print("dubing is found at line:")
            print(num)




# enumerate function is really fantastic!
