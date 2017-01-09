filename = "dubing.txt"

myfile = open(filename, 'a')

newline = "@background: blue;"

myfile.writelines(newline)

myfile.close()


# this will write the newline into dubing.txt
