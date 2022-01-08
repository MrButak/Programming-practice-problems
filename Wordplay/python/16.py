# What is the longest palindrome?
def main():

    in_file = open("../sowpods.txt", "r")

    def check_palindrome(word):
        word_reversed = []
        # make a new list with the word reversed
        for i in range(len(word) - 1):
            word_reversed.insert(0, word[i])
        # compare the word and the word reversed
        for i in range(len(words) - 1):
            if(word_reversed[i] != word[i]):
                return 
        # if word and word reversed are the same, append to a list
        palindromes.append(word)

    palindromes = []
    for words in in_file:
        # lenght of word -2 to calculate last index of char in string with escape character
        word_index_end = len(words) - 2
        # first check if first and last char match
        if(words[0] == words[word_index_end]):
            check_palindrome(words)
    print(max(palindromes, key=len))

if __name__ == '__main__':
    main()

