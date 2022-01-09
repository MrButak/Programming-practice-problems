// What countries both begin and end with a vowel?

let main = () => {
    
    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowels = ["A", "E", "I", "O", "U"];

    // Function checks fist char of word for vowel
    let check_vowels_first = (word) => {

        for(let i = 0; i < vowels.length; i++) {
            if(word[0] == vowels[i]) {
                for(let j = 0; j < vowels.length; j++) {
                    if(word[word.length - 1] == vowels[j]) {
                        return true
                    };
                };
            };
        
        };
        return false;
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        if(check_vowels_first(in_file[i].toUpperCase())) {
            console.log(in_file[i]);
        };
    };
};

main();