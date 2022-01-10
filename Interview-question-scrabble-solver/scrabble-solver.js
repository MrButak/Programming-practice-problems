
let user_pieces = {};
let word_letters = {};
let word_letter_arry = [];
let possible_words = {};
let scores = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};

// Function creates an obj of user inputed letters and assigns values
let make_user_pieces = (user_word) => {

    // TODO: for blank tile
    // 1. if blank tile '_' in play, all chars get +1 value
    user_pieces = {};
    for(let i = 0; i < 26; i++) {
        user_pieces[String.fromCharCode(i + 97)] = null;
    };
    for(let i = 0; i < user_word.length; i++) {
        user_pieces[user_word[i].toLowerCase()] += 1;
    };
    return;
};

// Function creates an obj from scrabble words and assigns values
let make_word_letters = (word) => {

    word_letters = {};
    word_letter_arry = [];
    for(let i = 0; i < word.length; i++) {
        word_letters[word[i].toLowerCase()] = 0;
        word_letter_arry.push(word[i].toLowerCase());
    };
    for(let i = 0; i < word.length; i++) {
        word_letters[word[i].toLowerCase()] += 1;
    };
};

// Function 
let check_match = () => {

    // TODO: for blank tiles
    // 1. first find tile with highest score value with a user_pieces value of 1 (blank tile)
    // 2. NULL value to all other tiles values (except the one with highest value and a user_pieces
       // value of 1
    // 2a. if another tiles score value is higher and user_pieces is > 0 after comparison, 
        // I can use that
    // 3. profit

    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] == null) {
            return false;
        };
    };

    for(let i = 0; i < word_letter_arry.length; i++) {
        user_pieces[word_letter_arry[i]]--;
    };

    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] < 0 ||
            user_pieces[word_letter_arry[i] == null]) {
            return false;
        };
    };

    return true; 
};

let calculate_score = (word) => {

    let score_cnt = 0;

    for(let i = 0; i < word.length; i++) {
        score_cnt += scores[word[i].toLowerCase()];
    };

    possible_words[word] = score_cnt;
};

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    
    // Main function calls
    
    for(let i = 0; i < in_file.length; i++) {
        make_user_pieces("kathryn");
        make_word_letters(in_file[i]);
        if(check_match()) {
            calculate_score(in_file[i]);
        };
    };
    console.table(possible_words);
};

main();