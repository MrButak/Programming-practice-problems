// What is the shortest word that contains all 5 vowels?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let vowel_arry = ["A", "E", "I", "O", "U"];
    let shortest_word = "";
    let first_word = true;
    

    // Function checks if all vowels are in word
    let check_vowels = (word) => {

        for(let i = 0; i < vowel_arry.length; i++) {
            if(word.includes(vowel_arry[i]) == false) {
                return false;
            };
        };

        return true;
    };

    // Function finds the shortest word that contains all vowels
    let get_shortest = (word) => {
        if(first_word == true) {
            shortest_word = word;
            first_word = false;
            return;
        };
        if(word.length < shortest_word.length) {
            shortest_word = word;
        };
    };

    // Main function handling
    for(let i = 0; i < in_file.length; i++) {

        if(check_vowels(in_file[i])) {
            get_shortest(in_file[i]);
        };
    };

    console.log(shortest_word);
};

main();