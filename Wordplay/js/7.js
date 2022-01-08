// What are all of the words that start and end with a Y?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {

        // Determine if first char of word is a 'Y'
        if(in_file[i][0] == "Y") {

            // Determine the last index position of word
            let last_index = in_file[i].length - 1
            
            if(in_file[i][last_index] == "Y") {
                console.log(in_file[i]);
            };
        };
    };
};

main();