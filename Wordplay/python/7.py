# What are all of the words that start and end with a Y?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        str_len = len(words)
        if(words[0] == "Y" and words[str_len - 2] == "Y"):
            print(words, end="")

if __name__ == '__main__':
    main()