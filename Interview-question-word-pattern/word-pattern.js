let assignToObj = (pattern, str, obj) => {

    obj[pattern] = str;
    return; 
};

let checkExistingValue = (pattern, str, obj) => {

    // if pattern char is not assigned to a value yet
    if(!obj[pattern]) {return false}

    // if is assigned to a value, make sure values are equal
    for(let [key, value] of Object.entries(obj)) {
        
        if(key == pattern && value == str) {
            
            return(false)
        };
    };
    return(true)
};

let main = () => {

    let inuptPattern = "abbba";
    let inputStr = "red blue blue blue red";
    
    let inputArry = inputStr.split(" ");
    let patternArry = inuptPattern.split("");
    let patternObj = {};

    // do a length check to see if pattern match is possible
    if(inputArry.length != patternArry.length) {return(console.log("not a pattern"))};

    // loop through each character in pattern
    for(let i = 0; i < patternArry.length; i++) {

        // see if pattern char is already assigned to a value, if so check if values match
        if(!checkExistingValue(patternArry[i], inputArry[i], patternObj)) {

            assignToObj(patternArry[i], inputArry[i], patternObj);
        }
        else {
            console.log("not a pattern")
            return;
        };
    };
    console.log("is a pattern")
};

main()
