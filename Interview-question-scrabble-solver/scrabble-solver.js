// method 2 I should hash values from a word?
// for every letter not in a word I'll have to calculate some value?


let user_pieces = {};
let word_letters = {};
let word_letter_arry = [];
let possible_words = {};
let scores = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};


// Function creates an obj of user inputed letters
let make_user_pieces = (user_word) => {

    user_pieces = {};
    for(let i = 0; i < 26; i++) {
        user_pieces[String.fromCharCode(i + 97)] = null;
    };
    for(let i = 0; i < user_word.length; i++) {
        user_pieces[user_word[i].toLowerCase()] += 1;
    };  
}

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

let check_match = () => {
    
    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] == null) {
            return false;
        };
    };

    for(let i = 0; i < word_letter_arry.length; i++) {
        user_pieces[word_letter_arry[i]]--;
    };
    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] < 0) {
            return false;
        };
    };

    return true;

  
};

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    

    
    for(let i = 0; i < in_file.length; i++) {
        make_user_pieces("shcstoeebbasar");
        make_word_letters(in_file[33]);
        if(check_match()) {
            console.log(in_file[i]);
        };
    };
    

    // console.log("user word");
    // console.table(user_pieces)
    // console.log("scrabble word");
    // console.table(word_letters)


};

main();