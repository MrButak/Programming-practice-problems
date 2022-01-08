# What are all of the words that have all 5 vowels, in alphabetical order?

def main():
    in_file = open("../sowpods.txt", "r")

    def check_vowels(word):
        word_len = len(word) - 1 # -1 for escape character
        start_index = - 1
        vowel_list = []
        vowel_list_ol = []
        vowels = ["A", "E", "I", "O", "U"]

        for i in range(word_len):
            start_index += 1
            # check if 5 vowels in a row is still possible              
            if(word[i] == "A" and (word_len - start_index) < 4):
                return
            # append all vowels to a list
            elif(word[i] == "A" or word[i] == "E" or word[i] == "I" or 
            word[i] == "O" or word[i] == "U"):
                vowel_list.append(word[i])

        # check if first vowel in list is 'A'
        if(vowel_list[0] != "A"):
            return
        # remove duplicates from list
        for i in vowel_list:
            if i not in vowel_list_ol:
                vowel_list_ol.append(i)
        # check if all vowels in a row
        for i in range(len(vowels)):
            if(vowel_list_ol[i] != vowels[i]):
                return
        # if all checks passed print the word
        print(word, end="")
        
    for words in in_file:
        # check if all vowels are in words
        if("A" in words and "E" in words and "I" in words 
        and "O" in words and "U" in words):
            check_vowels(words)

if __name__ == '__main__':
    main()