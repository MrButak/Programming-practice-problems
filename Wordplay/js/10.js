// What are all of the words that have all 5 vowels, in alphabetical order?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowel_arry = ["A", "E", "I", "O", "U"];

    // Function to determine if word includes all 5 vowels
    let determine_all_vowels = (word) => {

        for(let i = 0; i < vowel_arry.length; i++) {            
            if(word.includes(vowel_arry[i]) == false) {
                return false;
            };
        };
        return true;
    };

    // Function to determine if all vowels are in alphabetical order
    let determine_order = (word) => {

        let all_vowels = [];
        let ordered_vowels = [];
        let word_len = word.length;

        // Push all vowels in word into an arry
        for(let i = 0; i < word_len; i++) {
            for(let j = 0; j < vowel_arry.length; j++) {
                if(word[i] == vowel_arry[j]) {
                    all_vowels.push(word[i])
                };
            };
        };

        // Remove duplicates from that array
        for(let i = 0; i < all_vowels.length; i++) {
            if(ordered_vowels.includes(all_vowels[i]) == false) {
                ordered_vowels.push(all_vowels[i]);
            };
        };

        // Check if vowels are in aphabetical order
        for(let i = 0; i < vowel_arry.length; i++) {
            if(ordered_vowels[i] != vowel_arry[i]) {
                return
            };
        };

        // If word meets all specifications print it out
        console.log(word);
    };


    // Main fucnction call
    for(let i = 0; i < in_file.length; i++) {
        if(determine_all_vowels(in_file[i])) {
            determine_order(in_file[i]);
        };
    };
};

main();
