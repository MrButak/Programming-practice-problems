# What are all of the words that contain the word CAT and are exactly 5 letters long?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        # +1 to length for escape character
        if("CAT" in words and len(words) == 6):
            print(words, end="")

if __name__ == '__main__':
    main()

    