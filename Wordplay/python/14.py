# What is the longest word that contains no vowels?
def main():
    in_file = open ("../sowpods.txt", "r")
    long_consonant = []
    for words in in_file:
        if("A" not in words and "E" not in words and "I" not 
        in words and "O" not in words and "U" not in words):
            long_consonant.append(words)
    print(max(long_consonant), end="")

if __name__ == '__main__':
    main()