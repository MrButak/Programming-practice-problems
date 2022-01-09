# There is at least one country name that contains another country name. Find all of these cases.
# Create two list to compare against each other. Lower and strip whitespace from words.

def main():

    in_file = open("../countries.txt", "r")
    word_list = []
    for words in in_file:
        word_list.insert(0, words.lower().strip())

    for words in in_file:
        for i in range(len(word_list)):
            words = words.lower().strip()
            if(words != word_list[i]):
                if(words in word_list[i]):
                    print(words,"-IN-", word_list[i])

if(__name__ == "__main__"):
    main()
        