# What are all of the words that have no E or A and are at least 15 letters long?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("E" not in words and "A" not in words and len(words) > 15):
            print(words, end="")

if __name__ == '__main__':
    main()