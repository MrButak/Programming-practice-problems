// What are all of the words that have a B and an X and are less than 5 letters long?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {

        // First check if words lenght can meet specification
        if(in_file[i].length < 5) {

            if(in_file[i].includes("B") == true && in_file[i].includes("X") == true) {
                console.log(in_file[i]);
            };
        };
    };
};

main();