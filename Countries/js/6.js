// There is at least one country name that contains another country name. 
// Find all of these cases.

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Countries/countries.txt", "utf-8");
    let in_file = buffer_arry.split("\n");
    let country_list = [];
    
    // Function creates a list of all countries with whitespace removed
    let create_list = () => {

        for(let i = 0; i < in_file.length; i++) {
            country_list.unshift(in_file[i].toLowerCase());
        };  
        return;
    };

    // Function compares country names
    let compare_words = () => {

        for(let i = 0; i < in_file.length; i++) {
            let word = in_file[i].toLowerCase();
            for(let j = 0; j < country_list.length; j++) {

                   if(word != country_list[j] && 
                    word.includes(country_list[j]) == true) {
                       console.log(country_list[j], "-IN-", word);
                   };  
            };
        };

    };

    create_list();
    compare_words();

};

main();