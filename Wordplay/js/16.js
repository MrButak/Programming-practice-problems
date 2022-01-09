// What is the longest palindrome?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let longest_pal = "";

    // Function determines if word is a palindrom
    let is_palindrome = (word) => {
        let split_arry = word.split("");
        let rev_arry = split_arry.reverse();
        let rev_word = rev_arry.join("");
        if(word == rev_word) {
            return true
        };
        return false;
    };

    // Function keeps track of longest palindrome
    let find_longest = (word) => {
        if(word.length > longest_pal.length) {
            longest_pal = word;
        };
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {

        if(is_palindrome(in_file[i])) {
            find_longest(in_file[i]);
        };
    };

    // Print results
    console.log(longest_pal);
};

main();