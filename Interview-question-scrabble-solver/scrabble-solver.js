const { exit } = require("process");

let user_pieces = {};
let user_pieces_cyp = {};
let word_letters = {};
let word_letter_arry = [];
let possible_words = {};
let using_blank_tile = false;

let scores = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};

// Function creates an obj of user inputed letters and assigns values
let make_user_pieces = (user_word) => {

    user_letters = user_word.toLowerCase();
    user_pieces = {};
    
    for(let i = 0; i < 26; i++) {
        user_pieces[String.fromCharCode(i + 97)] = 0;
    };
    for(let i = 0; i < user_word.length; i++) {
        user_pieces[user_word[i].toLowerCase()] += 1;
    };

    // handles blank tile
    if(user_word.includes("_") == true) {
        using_blank_tile = true;
        user_pieces["_"] = null;
    };
    
    return;
};

// Function creates an obj from each scrabble word and assigns values
let make_word_letters = (word) => {

    word = word.toLowerCase();
    word_letters = {};
    word_letter_arry = [];
    for(let i = 0; i < word.length; i++) {
        word_letters[word[i]] = 0;
        word_letter_arry.push(word[i]);
    };
    for(let i = 0; i < word.length; i++) {
        word_letters[word[i]] += 1;
    };
    
};

// Function checks if user inputed letters match the current scrabble word
let check_match = (btile_cnt) => {

    if(using_blank_tile == true) {
        user_pieces[String.fromCharCode(btile_cnt + 97)] += 1;
    };
    // console.table(user_pieces);
    // exit(0)
    // check is user letters had each letter in current scrabble word
    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] <= 0) {
            user_pieces[String.fromCharCode(btile_cnt + 97)] -= 1;
            return false;
        };
    };

    // reduce users letter count for each letter that's in current scrabble word
    for(let i = 0; i < word_letter_arry.length; i++) {
        user_pieces[word_letter_arry[i]] -= 1;
    };

    // check if user letters can spell current scrabble word
    let revert = false;
    for(let i = 0; i < word_letter_arry.length; i++) {
        if(user_pieces[word_letter_arry[i]] < 0) {
            revert = true;
        };
    };

    // revert user_pieces back to the way they were before check
    if(revert == true) {
        for(let j = 0; j < word_letter_arry.length; j++) {
            user_pieces[word_letter_arry[j]]++;
        };
        user_pieces[String.fromCharCode(btile_cnt + 97)] -= 1;
        return false;
    };
    // revert user_pieces back to the way they were before check
    for(let i = 0; i < word_letter_arry.length; i++) {
        user_pieces[word_letter_arry[i]]++;
    };
    user_pieces[String.fromCharCode(btile_cnt + 97)] -= 1;
    return true; 
};

// Function adds +1 to each tile letter, one at a time. The next function call checks for a match
// let make_user_btile = (count) => {
    
    
//     user_pieces[String.fromCharCode(count + 97)] += 1;
//     return;
// };

// Function tallys up the score based on the scores obj
let calculate_score = (word) => {

    let score_cnt = 0;

    for(let i = 0; i < word.length; i++) {
        score_cnt += scores[word[i].toLowerCase()];
    };

    possible_words[word] = score_cnt;
};

// Function Main loops through all scrabble words and calls appropriate functions
let main = () => {

    // open file for reading
    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    
    // main program loop
    let the_letters = "kathryn_"

    make_user_pieces(the_letters);

    if(using_blank_tile == true) {
        
        for(let i = 0; i < in_file.length; i++) {
            make_word_letters(in_file[i]);
            for(let j = 0; j < 26; j++) {

                // make_user_btile(j);
                
                
                
                if(check_match(j)) {
                    
                    calculate_score(in_file[i]);// include j to - blank tile score
                    continue;
                };
            };
            
        };
    }

    else {
        for(let i = 0; i < in_file.length; i++) {
            make_word_letters(in_file[i]);
            if(check_match()) {
                calculate_score(in_file[i]);
            };
        };
    };

    console.table(possible_words);
    console.log(Object.keys(possible_words).length)
    
};


// clock runtime of program
console.time('Execution Time');
 
for (var i = 0; i < 100000000;i++);

main();

console.timeEnd('Execution Time');
