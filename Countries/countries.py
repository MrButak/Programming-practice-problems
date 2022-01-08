
in_file = open("countries.txt", "r")

# What are all of the countries that have “United” in the name?
# for words in in_file:
#     if("united" in words.lower()):
#         print(words, end="")
# in_file.seek(0)

# What countries both begin and end with a vowel?
# be_vowel_list = ["a", "e", "i", "o", "u"]
# def check_be_vowel(word, l_index):
#     for i in range(len(be_vowel_list)):
#         if(word[0].lower() == be_vowel_list[i]):
#             for j in range(len(be_vowel_list)):
#                 if(word[l_index].lower() == be_vowel_list[j]):
#                     print(word, end="")
#                     return
#             return
# for words in in_file:
#     be_vowel_lindex = len(words) - 2 # index position of last char
#     check_be_vowel(words, be_vowel_lindex)
# in_file.seek(0)

# What country names are > 50% vowels?
# def calculate_percent(word, vowel_cnt, word_length):
#     if(vowel_count > word_length / 2):
#         print(word, end="")
#         return
#     return

# vowel_list = ["a", "e", "i", "o", "u"]
# for words in in_file:
#     word_len = 0
#     vowel_count = 0
#     # count on alpanumeric character for word length
#     for c in words:
#         if(c.isalnum()):
#             word_len += 1
#     # get vowel count
#     for chars in words:
#         for i in range(len(vowel_list)):
#             if(chars.lower() == vowel_list[i]):
#                 vowel_count += 1
#     calculate_percent(words, vowel_count, word_len)
# in_file.seek(0)

# What is the shortest country name? Make sure your solution can handle ties.
    # Should "." count? Should "Micronesia (Federated States of)"?
# my_dict = {}
# for words in in_file:
#     word_length_count = len(words)
#     my_dict[words] = word_length_count
# tmp = min(my_dict.values())
# min_length = [key for key in my_dict if my_dict[key] == tmp]
# print(min_length)
# in_file.seek(0)


# What countries use only one vowel in their name (the vowel can be used multiple times)
# - For example, if the word “BEEKEEPER” were a country, it would be an answer, 
# because it only uses “E”.

# for words in in_file:
#     one_vowel = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0}
#     for chars in words:
#         for keys in one_vowel:
#             if(chars.lower() == keys):
#                 one_vowel[keys] += 1
#     one_vowel_cnt = 0
#     # check vowel count for each item in dict
#     for value in one_vowel.values():
#         if value > 0:
#             one_vowel_cnt += 1
#     if(one_vowel_cnt == 1):
#         print(words, end="")
# in_file.seek(0)

# There is at least one country name that contains another country name. Find all of these cases.

# Create two list to compare against each other. Lower and strip whitespace from words.

# word_list = []
# for words in in_file:
#     word_list.insert(0, words.lower().strip())

# for words in in_file:
#     for i in range(len(word_list)):
#         words = words.lower().strip()
#         if(words != word_list[i]):
#             if(words in word_list[i]):
#                 print(words,"-IN-", word_list[i])
# in_file.seek(0)
        





