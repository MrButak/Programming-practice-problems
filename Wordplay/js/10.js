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

    for(let i = 0; i < in_file.length; i++) {

        if(determine_all_vowels(in_file[i])) {
            console.log(in_file[i])
        }

        

        
    }

    
};

main();