# How many words contain the substring "TYPE”?
def main():
    in_file = open("../sowpods.txt", "r")
    type_cnt = 0
    for words in in_file:
        if("TYPE" in words):
            type_cnt += 1
    print(type_cnt)
    
if __name__ == '__main__':
    main()

