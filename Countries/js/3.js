// What country names are > 50% vowels?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowels = ["A", "E", "I", "O", "U"];
    let vowel_count = 0;

    // Function counts all vowels in a word
    let vowel_counter = (word) => {
        vowel_count = 0;

        for(let i = 0; i < word.length; i++) {

            for(let j = 0; j < vowels.length; j++) {
                if(word[i] == vowels[j]){
                    vowel_count += 1;
                };
            };
        };
    };

    // Function determines if the word has 50% + vowels
    let determine_percent = (word) => {

        if(vowel_count > word.length / 2) {
            return true;
        };
        return false;
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        vowel_counter(in_file[i].toUpperCase());
        if(determine_percent(in_file[i])) {
            console.log(in_file[i]);
        };
    };
};

main();
