// What are all of the words that have all 5 vowels, in any order?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {

        if(in_file[i].includes("A") == true && in_file[i].includes("E") == true &&
        in_file[i].includes("I") == true && in_file[i].includes("O") == true &&
        in_file[i].includes("U") == true) {

            console.log(in_file[i]);
        };
    };
};

main();