// What are all of the words containing UU?

let main = () => {

    const fs = require("fs");

    // Open file for reading
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");

    // Split strings on line break '\n'
    let in_file = buffer_arry.split("\n");

    for(let i = 0; i < in_file.length; i++) {
        if(in_file[i].includes("UU") == true) {
            console.log(in_file[i]);
        };
    };
};

main();

// Since words in file 'sowpods.txt' all appear on a new line, the below method
    // is not required, I am just leaving it here for a reference.


    // Open file for reading

// let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt");

    // Convert file to string. Use regex, split strings on line break '\n'

    // Regex Explanation: '/' start regex, '\r' match carriage returns, 
    // '\n' match line feed, '/' end regex, 'g' global match,
    // ', \n' replace all with line feed/break character

// let in_file = buffer_arry.toString().replace(/\r\n/g, "\n").split("\n");













