# What countries use only one vowel in their name (the vowel can be used multiple times)
# - For example, if the word “BEEKEEPER” were a country, it would be an answer, 
# because it only uses “E”.
def main():

    in_file = open("../countries.txt", "r")
    for words in in_file:
        one_vowel = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0}
        for chars in words:
            for keys in one_vowel:
                if(chars.lower() == keys):
                    one_vowel[keys] += 1
        one_vowel_cnt = 0

        # check vowel count for each item in dict
        for value in one_vowel.values():
            if value > 0:
                one_vowel_cnt += 1
        if(one_vowel_cnt == 1):
            print(words, end="")

if(__name__  == "__main__"):
    main()