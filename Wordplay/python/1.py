# What are all of the words containing UU?
def main():
    in_file = open("../sowpods.txt", "r")
    for words in in_file:
        if("UU" in words):
            print(words, end="")

if __name__ == '__main__':
    main()

