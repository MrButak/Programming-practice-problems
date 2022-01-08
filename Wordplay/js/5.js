// What are all of the words that have no E or A and are at least 15 letters long?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {

        // First check is word is long enough to meet specification
        if(in_file[i].length > 14) {
            
            if(in_file[i].includes("E") == false &&
            in_file[i].includes("A") == false) {

                console.log(in_file[i])
            };
        };
    };
};

main();