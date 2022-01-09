let words_obj = (input_letters) => {

    let obj = 
    {
        "A": 1,
        "B": 1
    };

    if(obj["C"] > 0) {
        console.log("is")
    }
    else {
        console.log("is not")
        console.log(obj)
    }


    

};

let main = () => {

    const fs = require("fs");
    let buffer_arry = fs.readFileSync("Wordplay/sowpods.txt", "utf-8");
    let in_file = buffer_arry.split("\n");


    words_obj("heydwew");

};

main();