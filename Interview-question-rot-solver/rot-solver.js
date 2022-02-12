let shiftCharRight = (str, num, isUpper) => {
    
    // if char is lowercase, temporarily conver to upper
    if(!isUpper) {str -= 32};
    
    // if character needs to wrap (shifting will move past 'Z')
    if(str + num > 90) {
        
        for(let i = 0; i < num; i++) {

            if(str < 90) {
                str++;
            }
            else {
                str -= 25;
            };
        };

        // convert back to lowercase if needed
        if(!isUpper) {str += 32};
        return(String.fromCharCode(str));
    }

    // if character does not need to wrap
    else {
        if(!isUpper) {str += 32};
        return(String.fromCharCode(str + num));
    };
};


let shiftCharLeft = (str, num, isUpper) => {
    
    // if char is lowercase, temporarily conver to upper
    if(!isUpper) {str -= 32};

    // convert negative number to positive
    num = Math.abs(num);

    // if character needs to wrap (shifting will move before 'A')
    if(str - num < 65) {
        
        for(let i = 0; i < num; i++) {

            if(str > 65) {
                str--;
            }
            else {
                str += 25;
            };
        };

        // convert back to lowercase if needed
        if(!isUpper) {str += 32};
        return(String.fromCharCode(str));
    }

    // if character does not need to wrap
    else {
        if(!isUpper) {str += 32};
        return(String.fromCharCode(str - num));
    };
};


// Main function calls
let rotate = (inputStr, inputNum) => {

    let pos;
    let isUpper;
    let rotArry = [];
    let reAlpha = /^[a-z]$/i;

    // loop through each character of string
    for(let i = 0; i < inputStr.length; i++) {

        // check for non alpha characters
        if(!reAlpha.test(inputStr[i])) {
           rotArry.push(inputStr[i]);
           continue;
        };

        // check case
        isUpper = (inputStr[i] == inputStr[i].toUpperCase()) ? true : false;

        // check for positive or negative input number
        pos = (inputNum < 0) ? false : true;

        // check if char will be shifted '+' or '-' then send to function to shift
        if(pos) {
            
            rotArry.push(shiftCharRight(inputStr[i].charCodeAt(), inputNum, isUpper))
        }
        else {
            rotArry.push(shiftCharLeft(inputStr[i].charCodeAt(), inputNum, isUpper))
        };
        
       
    };
    return(rotArry.join(""))
};

let main = () => {
    console.assert(rotate("HELLO", 1) === "IFMMP");
    console.assert(rotate("HELLO", 2) === "JGNNQ");
    console.assert(rotate("HELLO", -1) === "GDKKN");
    console.assert(rotate("hello", 88) === "rovvy");
    console.assert(rotate("Hey How's it going?", -22) === "Lic Lsa'w mx ksmrk?");
    console.assert(rotate("Let's wrap this bad boy around a few times!!!!!!", -68) === "Vod'c gbkz drsc lkn lyi kbyexn k pog dswoc!!!!!!");
}

main()