# What are all of the countries that have “United” in the name?

def main():
    in_file = open("../countries.txt", "r")
    for words in in_file:
        if("united" in words.lower()):
            print(words, end="")

if(__name__  == "__main__"):
    main()
    