in_file = open("../countries.txt", "r")

def main():
    # What country names are > 50% vowels?
    def calculate_percent(word, vowel_cnt, word_length):
        if(vowel_count > word_length / 2):
            print(word, end="")
            return
        return

    vowel_list = ["a", "e", "i", "o", "u"]
    for words in in_file:
        word_len = 0
        vowel_count = 0

        # count on alpanumeric character for word length
        for c in words:
            if(c.isalnum()):
                word_len += 1
                
        # get vowel count
        for chars in words:
            for i in range(len(vowel_list)):
                if(chars.lower() == vowel_list[i]):
                    vowel_count += 1
        calculate_percent(words, vowel_count, word_len)

if(__name__  == "__main__"):
    main()