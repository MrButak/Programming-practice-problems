// What are all of the words with no vowel and not even a Y?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    
};

main();

// for(let i = 0; i < in_file.length; i++) {
//     if(in_file[i].includes("A") == false && in_file[i].includes("E") == false &&
//     in_file[i].includes("I") == false && in_file[i].includes("O") == false &&
//     in_file[i].includes("U") == false && in_file[i].includes("Y") == false) {

//         console.log(in_file[i])
//     };
// };