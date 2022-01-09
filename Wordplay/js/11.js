// How many words contain the substring "TYPE”?

// Function to check words for substring
let check_contains = (word) => {

    if(word.includes("TYPE") == true) {
        return true;
    };
    return false;
};

// Main function call handles sending words to check_contains()
let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let word_count = 0;

    for(let i = 0; i < in_file.length; i++) {
        if(check_contains(in_file[i])) {
            word_count += 1;
        };
    };

    console.log(word_count);
};

main();
