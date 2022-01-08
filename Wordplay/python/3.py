# What are all of the words containing a Q but not a U?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("Q" in words and "U" not in words):
            print(words, end="")
    
if __name__ == '__main__':
    main()