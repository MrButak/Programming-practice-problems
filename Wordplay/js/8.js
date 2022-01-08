// What are all of the words with no vowel and not even a Y?

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");

    extra_vowels = "AEIOUY"

    for(let i = 0; i < in_file.length; i++) {

        for(let j = 0; j < extra_vowels.length; j++) {

            if(in_file[i].includes(extra_vowels[j])) {
                continue;
            }
            console.log(in_file[i]);
        }
    }
};

main();