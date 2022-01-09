# What is the shortest country name? Make sure your solution can handle ties.
# Should "." count? Should "Micronesia (Federated States of)"?

def main():
    
    in_file = open("../countries.txt", "r")
    my_dict = {}
    for words in in_file:
        word_length_count = len(words)
        my_dict[words] = word_length_count
    tmp = min(my_dict.values())
    min_length = [key for key in my_dict if my_dict[key] == tmp]
    print(min_length)

if(__name__  == "__main__"):
    main()