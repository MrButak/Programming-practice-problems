// What are all of the words containing a Q but not a U?

let main = () => {
    
    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {
        if(in_file[i].includes("Q") == true && 
        in_file[i].includes("U") == false) {
            console.log(in_file[i]);
        };
    };
};

main();
