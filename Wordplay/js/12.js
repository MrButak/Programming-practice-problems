// Create and print an array containing all of the words that end in "GHTLY"

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let ghtly_arry = [];

    // Function checks if word ends in 'GHTLY'
    let check_ghtly = (word) => {
        
        if(word.slice(-5) == "GHTLY") {
            ghtly_arry.push(word);
        };
    };

    // Function checks if words is long enough
    let check_len = (word) => {
        if(word.length < 5) {
            return false;
        };
        return true;
    };

    // Main function handling
    for(let i = 0; i < in_file.length; i++) {
        if(check_len(in_file[i])) {
            check_ghtly(in_file[i]);
        };
    };

    console.log(ghtly_arry);
};

main();