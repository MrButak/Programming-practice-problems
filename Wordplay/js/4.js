// What are all of the words that contain the word CAT and are exactly 5 letters long?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    
    for(let i = 0; i < in_file.length; i++) {
        if(in_file[i].includes("CAT") == true && in_file[i].length ==5) {
            console.log(in_file[i])
        };
    };
};

main();