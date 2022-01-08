# What are all of the words containing an X and a Y and a Z?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("X" in words and "Y" in words and "Z" in words):
            print(words, end="")

if __name__ == '__main__':
    main()