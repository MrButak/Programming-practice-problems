# What countries both begin and end with a vowel?
def main():

    in_file = open("../countries.txt", "r")

    be_vowel_list = ["a", "e", "i", "o", "u"]

    def check_be_vowel(word, l_index):
        for i in range(len(be_vowel_list)):
            if(word[0].lower() == be_vowel_list[i]):
                for j in range(len(be_vowel_list)):
                    if(word[l_index].lower() == be_vowel_list[j]):
                        print(word, end="")
                        return
                return

    for words in in_file:
        be_vowel_lindex = len(words) - 2 # index position of last char
        check_be_vowel(words, be_vowel_lindex)

if(__name__  == "__main__"):
    main()