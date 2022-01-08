# What are all of the letters that never appear consecutively in an English word? For 
# example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t 
# an answer, because of “AARDVARK”, but which letters never appear consecutively?
import string

def main():
    in_file = open("../sowpods.txt", "r")
    alpha = string.ascii_uppercase
    dbls_dict = {}
    dbls_list = []
    for i in range(25):
        dbls_dict[alpha[i] + alpha[i]] = 0
        dbls_list.append(alpha[i] + alpha[i])

    for words in in_file:
        for i in range(25):
            if(dbls_list[i] in words):
                dbls_dict[dbls_list[i]] += 1
    # Print results            
    for key,value in dbls_dict.items():
        if(value == 0):
            print(key)

if __name__ == '__main__':
    main()