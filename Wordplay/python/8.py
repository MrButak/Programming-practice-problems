# What are all of the words with no vowel and not even a Y?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("A" not in words and "E" not in words and "I" not in words 
        and "O" not in words and "U" not in words and "Y" not in words):
            print(words,end="")

if __name__ == '__main__':
    main()