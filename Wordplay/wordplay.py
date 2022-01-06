# Python 3.7.3

in_file = open("sowpods.txt", "r")

# For loops and if conditions

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
# for words in in_file:
#     if("A" in words and "E" in words and "I" in words 
#     and "O" in words and "U" in words):
#         print(words,end="")
# in_file.seek(0)

# What are all of the words that have all 5 vowels, in alphabetical order?
# def check_vowels(word):
#     word_len = len(word) - 1 # -1 for escape character
#     start_index = - 1
#     vowel_list = []
#     vowel_list_ol = []
#     vowels = ["A", "E", "I", "O", "U"]

#     for i in range(word_len):
#         start_index += 1
#         # check if 5 vowels in a row is still possible              
#         if(word[i] == "A" and (word_len - start_index) < 4):
#             return
#         # append all vowels to a list
#         elif(word[i] == "A" or word[i] == "E" or word[i] == "I" or 
#         word[i] == "O" or word[i] == "U"):
#             vowel_list.append(word[i])

#     # check if first vowel in list is 'A'
#     if(vowel_list[0] != "A"):
#         return
#     # remove duplicates from list
#     for i in vowel_list:
#         if i not in vowel_list_ol:
#             vowel_list_ol.append(i)
#     # check if all vowels in a row
#     for i in range(len(vowels)):
#         if(vowel_list_ol[i] != vowels[i]):
#             return
#     # if all checks passed print the word
#     print(word, end="")
    
# for words in in_file:
#     # check if all vowels are in words
#     if("A" in words and "E" in words and "I" in words 
#     and "O" in words and "U" in words):
#         check_vowels(words)
# in_file.seek(0)

# Setting up storage to use during a for loop, including counters and arrays

# How many words contain the substring "TYPE”?
# type_cnt = 0
# for words in in_file:
#     if("TYPE" in words):
#         type_cnt += 1
# print(type_cnt)
# in_file.seek(0)

# Create and print an array containing all of the words that end in "GHTLY"
# ghtly_arr = []
# for words in in_file:
#     word_len = len(words) - 1 # -1 for escape character
#     # Check if word is elibible to meet conditions
#     if("GHTLY" not in words):
#         continue
#     # Check if last 5 chars of word contain 'GHTLY'
#     elif(words[word_len - 5: word_len] != "GHTLY"):
#         continue
#     # If all checks passed, append to list
#     ghtly_arr.append(words)
# print(ghtly_arr, end="")
# in_file.seek(0)

