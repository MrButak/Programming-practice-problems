// What are all of the countries that have “United” in the name?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    // Function locates 'united' in word
    let find_united = (word) => {
        if(word.toLowerCase().includes("united") == true) {
            return true;
        };
        return false;
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        if(find_united(in_file[i])) {
            console.log(in_file[i]);
        };
    };
};

main();
