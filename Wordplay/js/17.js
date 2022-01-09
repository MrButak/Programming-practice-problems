// What are all of the letters that never appear consecutively in an English word? For 
// example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t 
// an answer, because of “AARDVARK”, but which letters never appear consecutively?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let repeat_obj = {};
    
    // Function creates obj with double alpa chars ("AA") with values set to 0
    let create_obj = () => {
        for(let i = 0; i < 26; i++) {
            repeat_obj[(String.fromCharCode(i + 65) + 
            String.fromCharCode(i + 65))] = 0;
        };
        return;
    };

    // Function counts if char is reapeated twice consecutively ("AA")
    let count_consecutives = (word) => {

        for(let i = 0; i < 26; i++) {
            if(word.includes(Object.keys(repeat_obj)[i]) == true) {
                repeat_obj[Object.keys(repeat_obj)[i]] += 1;
            };
        };
    };

    // Function finds and displays results
    let display_results = () => {

        console.table(repeat_obj);
        for(let i = 0; i < 26; i++) {
            if(repeat_obj[Object.keys(repeat_obj)[i]] == 0) {
                console.log(Object.keys(repeat_obj)[i], 0);
            };
        };
    };
    
    // Main function calls
    create_obj();
    for(let i = 0; i < in_file.length; i++) {
        count_consecutives(in_file[i]);
    };
    display_results();
};

main();
