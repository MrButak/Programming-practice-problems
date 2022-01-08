# Which of the letters Q, X, and Z is the least common?
def main():
    in_file = open("../sowpods.txt", "r")
    least_common = {
        "q": 0,
        "x": 0,
        "z": 0
    }
    for words in in_file:
        # check if word contains Q, X, or Z
        if("Q" in words or "X" in words or "Z" in words):
            for chars in words:
                if(chars == "Q"):
                    least_common["q"] += 1
                elif(chars == "X"):
                    least_common["x"]+= 1
                elif(chars == "Z"):
                    least_common["z"] += 1
    print(min(least_common))

if __name__ == '__main__':
    main()