# Create and print an array containing all of the words that end in "GHTLY"
def main():
    in_file = open ("../sowpods.txt", "r")
    ghtly_arr = []
    for words in in_file:
        word_len = len(words) - 1 # -1 for escape character
        # Check if word is elibible to meet conditions
        if("GHTLY" not in words):
            continue
        # Check if last 5 chars of word contain 'GHTLY'
        elif(words[word_len - 5: word_len] != "GHTLY"):
            continue
        # If all checks passed, append to list
        ghtly_arr.append(words)
    print(ghtly_arr, end="")

if __name__ == '__main__':
    main()