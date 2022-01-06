# Python 3.7.3

in_file = open("sowpods.txt", "r")

# What are all of the words containing UU?
# for words in in_file:
#     if("UU" in words):
#         print(words, end="")
# in_file.seek(0)

# What are all of the words containing an X and a Y and a Z?
# for words in in_file:
#     if("X" in words and "Y" in words and "Z" in words):
#         print(words, end="")
# in_file.seek(0)

# What are all of the words containing a Q but not a U?
# for words in in_file:
#     if("Q" in words and "U" not in words):
#         print(words, end="")
# in_file.seek(0)

# What are all of the words that contain the word 
    # CAT and are exactly 5 letters long?
# for words in in_file:
#     if("CAT" in words and len(words) == 6): # count for lenght of escape character
#         print(words, end="")
# in_file.seek(0)

# What are all of the words that have no E or A and are at least 15 letters long?
# for words in in_file:
#     if("E" not in words and "A" not in words and len(words) > 15):
#         print(words, end="")
# in_file.seek(0)

# What are all of the words that have a B and an X and are less 
# than 5 letters long?
# for words in in_file:
#     if("B" in words and "X" in words and len(words) < 6):
#         print(words)
# in_file.seek(0)

# What are all of the words that start and end with a Y?
# for words in in_file:
#     str_len = len(words)
#     if(words[0] == "Y" and words[str_len - 2] == "Y"):
#         print(words, end="")
# in_file.seek(0)

# What are all of the words with no vowel and not even a Y?
# for words in in_file:
#     if("A" not in words and "E" not in words and "I" not in words 
#     and "O" not in words and "U" not in words and "Y" not in words):
#         print(words,end="")
# in_file.seek(0)

# What are all of the words that have all 5 vowels, in any order?