# What are all of the words that have a B and an X and are less than 5 letters long?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("B" in words and "X" in words and len(words) < 6):
            print(words, end="")

if __name__ == '__main__':
    main()