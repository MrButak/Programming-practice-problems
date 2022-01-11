
let user_letters = "";
let user_pieces = {};
let word_pieces = {};
let using_blank_tile = false;
let blank_tile = [];
let possible_words = {};
let scores = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10};


let create_user_pieces = (letters) => {
    letters = letters.toLowerCase();

    for(let i = 0; i < letters.length; i++) {
        user_pieces[letters[i]] = 0;
    };

    for(let i = 0; i < letters.length; i++) {
        user_pieces[letters[i]] += 1;
    };

    if(letters.includes("_") == true) {
        user_pieces["_"] = 1;
        using_blank_tile = true;
    };
    return;
};

let create_word_pieces = (word) => {

    word = word.toLowerCase();

    for(let i = 0; i < word.length; i++) {
        word_pieces[word[i]] = 0
    };
    for(let i = 0; i < word.length; i++) {
        word_pieces[word[i]] += 1;
    };
    
    return;
};

let check_match = (word) => {

    word = word.toLowerCase();
    let undefined_count = 0;
    let negative_count = 0;
    let match = false;

    // check if user letters is long enough
    if(user_letters.length < word.length) {
        return false;
    };

    // check if user letters has enough letters
    for(let i = 0; i < word.length; i++) {

        if(user_pieces[word[i]] == undefined ||
            user_pieces[word[i]] == 0) {
            undefined_count += 1;
        };

        if(undefined_count > 0) {
            return false;
        };
    };

    for(let i = 0; i < word.length; i++) {
        user_pieces[word[i]] -= 1;
        if(user_pieces[word[i]] < 0) {
            match = false;
            negative_count++;
        };
    };
    

    // revert user_pieces back to original
    for(let i = 0; i < user_letters.length; i++) {
        user_pieces[user_letters[i]] = 0;
    };
    for(let i = 0; i < user_letters.length; i++) {
        user_pieces[user_letters[i]] += 1;
    };
    
    if(negative_count > 0) {
        return false;
    }
    
    return true;
}

let check_match_bt = (word) => {
    
    word = word.toLowerCase();
    let minus_count = 0
    let undefined_count = 0;
    blank_tile = [];
    let match = false;

    // check if user letters is long enough
    if(user_letters.length < word.length) {
        return false;
    };

    // check if user letters has enough letters
    for(let i = 0; i < word.length; i++) {
        if(user_pieces[word[i]] == undefined ||
            user_pieces[word[i]] == 0) {
            undefined_count += 1;
            blank_tile.push(word[i]);
        };
        if(undefined_count > 1) {
            return false;
        };
    };
    
    // if a letter is missing for possible match, asign blank tile to that letter
    if(undefined_count == 1) {
        user_pieces[blank_tile[0]] = 1;
    };

    // check if user letters, including blank tile and be a match
    for(let i = 0; i < word.length; i++) {
        user_pieces[word[i]] -= 1;
        if(user_pieces[word[i]] < 0) {
            minus_count++;
        };
    };
    
    // handles the two possibilites for a match
    // check for match with blank tile if tile was used to create new letter
    if(undefined_count == 1 && minus_count < 1) {
    user_pieces[blank_tile[0]] = undefined;
    match = true;
    }
    // check for match with blank tile used for letter that already existed
    else if(undefined_count < 1 && minus_count < 2) {
        match = true;
    }
    else {
        match = false
    };
    
    // revert user_pieces back to original
    for(let i = 0; i < user_letters.length; i++) {
        user_pieces[user_letters[i]] = 0
    };
    for(let i = 0; i < user_letters.length; i++) {
        user_pieces[user_letters[i]] += 1
    };
    
    if(match == false) {
        return false;
    };
    return true;  
};

let calculate_score = (word) => {

    word = word.toLowerCase();
    let word_score = 0;
    
    for(let i = 0; i < word.length; i++) {
        word_score += scores[word[i]];
    };

    if(using_blank_tile == true && blank_tile.length != 0) {
       word_score -= scores[blank_tile[0]]
    }
    possible_words[word] = word_score;
};

let main = () => {

    // open file for reading
    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    user_letters = "yohana";
    let count = 0;

    create_user_pieces(user_letters);

    for(let i = 0; i < in_file.length; i++) {
        create_word_pieces(in_file[i]);
        if(using_blank_tile == true) {

            if(check_match_bt(in_file[i])) {
                calculate_score(in_file[i]);
                count++;
            }; 
        }
        else {
            if(check_match(in_file[i])) {
                calculate_score(in_file[i]);
                count++
            };
        };   
    };

    console.table(possible_words);
    console.log(count);

   
    
    

};

// clock runtime of program
console.time('Execution Time');
for (var i = 0; i < 100000000;i++);

main();

console.timeEnd('Execution Time');