// What is the shortest country name? Make sure your solution can handle ties.

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let short_obj = {};
    let is_first_word = true;
    let shortest_int = 0;

    // Function determines shortest words
    let get_lengths = (word) => {

        if(is_first_word == true) {
            shortest_int = word.length;
            short_obj[word] = word.length;
            is_first_word = false;
            return;
        };

        if(word.length < shortest_int) {
            shortest_int = word.length;
        };

        short_obj[word] = word.length;
    };

    // Function finds the words with the shortest recorded value
    let display_results = () => {
        for(let i = 0; i < Object.keys(short_obj).length; i++) {
            if(short_obj[Object.keys(short_obj)[i]] == shortest_int) {
                console.log(Object.keys(short_obj)[i]);
            };
        };
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        get_lengths(in_file[i]);
    };
    display_results();

};

main();
