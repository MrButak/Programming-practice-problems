// Which of the letters Q, X, and Z is the least common?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let cnt_obj = {"Q": 1, "X": 0, "Z": 0};
    let least_common = [];


    // Function counts all occurrences of Q, X, and Z
    let count_letters = (word) => {
        
        for(let i = 0; i < word.length; i++) {
            for(let j = 0; j < Object.keys(cnt_obj).length; j++) {
                if(word[i - 1] == Object.keys(cnt_obj)[j]) {
                    cnt_obj[Object.keys(cnt_obj)[j]] += 1;
                };
            };
        };
    };

    // Function finds least occourences of letters specified and print results
    let find_least_common = () => {
        let key = Object.keys(cnt_obj).reduce((key, v) => cnt_obj[v] < cnt_obj[key] ? v : key);
        console.table(cnt_obj);
        console.log("Lowest count: ", key, cnt_obj[key]);
    };

    // Main function calls
    for(let i = 0; i < in_file.length; i++) {
        count_letters(in_file[i]);
    };
    find_least_common();
};

main();