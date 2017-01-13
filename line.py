import linecache
with open("cyborg-diff.txt") as bootswatch:
    for line in bootswatch:
        cyborg = open("cyborg.variables", 'a')
        if line[0] == "@":
            cyborg.writelines(line)
            words = line.partition(":")
            bwvar = words[0]
            bwvalue = words[2].partition(";")[0].lstrip()
            with open("variables-semantic.less") as vsm:
                for num, line in enumerate(vsm, 1):
                    if bwvar in line:
                        number = num
                        break
            sm = linecache.getline("variables-semantic.less", number+1)
            if sm[0] not in ["/", "@", "\n", " "]:
                cyborg.writelines(sm)
                if ".overrides" not in sm:
                    filename = sm.partition(":")[0]+".variables"
                    newfile = open(filename, 'a')
                    if sm.partition(":")[-1] is "\n":
                        smvar = bwvar
                    else:
                        smvar = "@" + sm.partition(":")[2].rstrip()
                    smvalue = bwvalue 
                    smline = smvar + ": " + smvalue + ";\n"
                    newfile.writelines(smline)
                else:
                    overrides = open("overrides.variables", 'a')
                    overrides.writelines(sm)
            else:
                pass

        else:
            pass
