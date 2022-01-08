// What are all of the words containing an X and a Y and a Z?

let main = () => {

    const fs = require("fs");

    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {
        if(in_file[i].includes("X") && in_file[i].includes("Y")
        && in_file[i].includes("Z")) {
            console.log(in_file[i])
        };
    };
};

main();
