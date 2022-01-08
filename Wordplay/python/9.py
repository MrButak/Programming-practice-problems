# What are all of the words that have all 5 vowels, in any order?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("A" in words and "E" in words and "I" in words 
        and "O" in words and "U" in words):
            print(words,end="")

if __name__ == '__main__':
    main()