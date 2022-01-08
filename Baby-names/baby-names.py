in_file = open("baby_names_2020_short.txt", "r")
scrabble_file = open("../Wordplay/sowpods.txt", "r")
# What is the shortest baby name in the top 40 baby names for 2020?

# shortest_name = []
# for words in in_file:
#     shortest_name.append(words)
# print(min(shortest_name, key=len), end="")
# in_file.seek(0)


# What are the longest baby names in the top 40 baby names for 2020? 
# Make sure you can handle if there’s a tie.

# Put all words into a dict with length as value
# long_dict = {}
# for words in in_file:
#     long_dict[words] = len(words)
# # Get the longest values from dict
# tmp = max(long_dict.values())
# max_length = [key for key in long_dict if long_dict[key] == tmp]
# print(max_length)
# in_file.seek(0)

# There is at least one baby name from the top 40 baby names for 2020 that, when spelled 
# backwards, is a valid Scrabble word. Find and print all such names.
#     [ ] Solve this two ways: first with an array to hold the Scrabble words, and then with a 
#     dictionary (or set) to hold the Scrabble words. Use timer functions to measure how 
#     long it takes to complete this work under each implementation. Why is the time different?

# Solution 1

# Create a list with baby names reversed
# bn_reversed = []
# for words in in_file:
#     bn_reversed.append(words[::-1].lower().strip())
# # Create a list of Scrabble words
# scrabble_list = []
# for words in scrabble_file:
#     scrabble_list.append(words.lower().strip())

# # Compare each reversed baby name against each scrabble word
# for i in range(len(bn_reversed)):
#     for j in range(len(scrabble_list)):
#         if(bn_reversed[i] == scrabble_list[j]):
#             print(scrabble_list[j])
# # Move pointer back to start of file (it should be already, but just in case)            
# in_file.seek(0)
# scrabble_file.seek(0)

# Solution 2

# Create a dict with all scrabble words and set values to 0
# scrabble_dict = {}
# for words in scrabble_file:
#     scrabble_dict[words.lower().strip()] = 0

# # Create a list with baby names reversed
# bn_reversed = []
# for words in in_file:
#     bn_reversed.append(words[::-1].lower().strip())

# # Compare each reversed baby name against each scrabble word
# for i in range(len(bn_reversed)):
#     for keys in scrabble_dict.keys():
#         if(bn_reversed[i] == keys):
#             print(bn_reversed[i])

# # Move pointer back to start of file (it should be already, but just in case)            
in_file.seek(0)
scrabble_file.seek(0)

# Solution 2.5

# Create a set with all scrabble words and set values to 0
scrabble_set = {""}
for words in scrabble_file:
    scrabble_set.add(words.lower().strip())

# Create a list with baby names reversed
bn_reversed = []
for words in in_file:
    bn_reversed.append(words[::-1].lower().strip())

# Compare each reversed baby name against each scrabble word
for i in range(len(bn_reversed)):
    for word in scrabble_set:
        if(bn_reversed[i] == word):
            print(bn_reversed[i])
            
# Move pointer back to start of file (it should be already, but just in case)            
in_file.seek(0)
scrabble_file.seek(0)



    



