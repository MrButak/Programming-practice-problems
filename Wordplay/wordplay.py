# Python 3.7.3
import string


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

# What is the shortest word that contains all 5 vowels?
# short_vowels = []
# for words in in_file:
#     if("A" in words and "E" in words and "I" in words and "O" in words
#     and "U" in words):
#         short_vowels.append(words)
# print(min(short_vowels), end="")
# in_file.seek(0)

# What is the longest word that contains no vowels?
# long_consonant = []
# for words in in_file:
#     if("A" not in words and "E" not in words and "I" not 
#     in words and "O" not in words and "U" not in words):
#         long_consonant.append(words)
# print(max(long_consonant), end="")
# in_file.seek(0)

# Which of the letters Q, X, and Z is the least common?
# least_common = {
#     "q": 0,
#     "x": 0,
#     "z": 0
# }
# for words in in_file:
#     # check if word contains Q, X, or Z
#     if("Q" in words or "X" in words or "Z" in words):
#         for chars in words:
#             if(chars == "Q"):
#                 least_common["q"] += 1
#             elif(chars == "X"):
#                 least_common["x"]+= 1
#             elif(chars == "Z"):
#                 least_common["z"] += 1
# print(min(least_common))
# in_file.seek(0)

# What is the longest palindrome?
# def check_palindrome(word):
#     word_reversed = []
#     # make a new list with the word reversed
#     for i in range(len(word) - 1):
#         word_reversed.insert(0, word[i])
#     # compare the word and the word reversed
#     for i in range(len(words) - 1):
#         if(word_reversed[i] != word[i]):
#             return 
#     # if word and word reversed are the same, append to a list
#     palindromes.append(word)

# palindromes = []
# for words in in_file:
#     # lenght of word -2 to calculate last index of char in string with escape character
#     word_index_end = len(words) - 2
#     # first check if first and last char match
#     if(words[0] == words[word_index_end]):
#         check_palindrome(words)
# print(max(palindromes, key=len))
# in_file.seek(0)


# What are all of the letters that never appear consecutively in an English word? For 
# example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t 
# an answer, because of “AARDVARK”, but which letters never appear consecutively?

# alpha = string.ascii_uppercase
# dbls_dict = {}
# dbls_list = []
# for i in range(25):
#     dbls_dict[alpha[i] + alpha[i]] = 0
#     dbls_list.append(alpha[i] + alpha[i])

# for words in in_file:
#     for i in range(25):
#         if(dbls_list[i] in words):
#             dbls_dict[dbls_list[i]] += 1
# # Print results            
# for key,value in dbls_dict.items():
#     if(value == 0):
#         print(key)

    
