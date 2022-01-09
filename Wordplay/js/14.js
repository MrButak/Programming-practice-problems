// What is the longest word that contains no vowels?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowel_arry = ["A", "E", "I", "O", "U"];
    let longest_word = "";

    // Function checks if words is all consonants
    let check_consonants = (word) => {

        for(let i = 0; i < vowel_arry.length; i++) {
            if(word.includes(vowel_arry[i]) == true) {
                return false;
            };
        };
        return true;
    };
    
    // Function gets longest word with no vowels
    let get_longest = (word) => {
        if(word.length > longest_word.length) {
            longest_word = word;
        };
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        if(check_consonants(in_file[i])) {
            get_longest(in_file[i]);
        };
    };

    console.log(longest_word);
};

main();