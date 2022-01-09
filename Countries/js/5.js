// What countries use only one vowel in their name (the vowel can be used multiple times) For
// example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowels = ["A", "E", "I", "O", "U"];
    let vowel_arry = [];
    let single_vowel = [];

    let find_vowels = (word) => {

        vowel_arry = [];

        for(let i = 0; i < word.length; i++) {

            for(let j = 0; j < vowels.length; j++) {

                if(word[i] == vowels[j]) {
                    vowel_arry.push(vowels[j]);
                };
            };
        };
    };

    // Function determines if words uses on 1 vowel
    let determine_one = () => {

        // create Set out of vowell_arry. This will remove all duplicates
        single_vowel = [...new Set(vowel_arry)];
        if(single_vowel.length > 1) {
            return false;
        };
        return true;
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        find_vowels(in_file[i].toUpperCase());
        if(determine_one()) {
            console.log(in_file[i]);
        };
    };

};

main();
