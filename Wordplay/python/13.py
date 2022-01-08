# What is the shortest word that contains all 5 vowels?
def main():
    in_file = open ("../sowpods.txt", "r")
    short_vowels = []
    for words in in_file:
        if("A" in words and "E" in words and "I" in words and "O" in words
        and "U" in words):
            short_vowels.append(words)
    print(min(short_vowels), end="")

if __name__ == '__main__':
    main()