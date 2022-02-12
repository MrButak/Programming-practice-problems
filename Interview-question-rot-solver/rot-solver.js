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
   
    // console.log({str}, {num})

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
let main = () => {

    // Test Cases *******************************************

    // ("HELLO", 1) -> "IFMMP" shift right by 1
    // ("HELLO", 2) -> "JGNNQ" shift right by 2
    // ("HELLO", -1) -> "GDKKN" shift left by 1
    // ("HELLO", 27) -> "IFMMP" shift right by 27
    
    // ("hello", 88) -> "rovvy" shift right by 88
    // ("Hey How's it going?", -22) -> shift left by 22 "Lic Lsa'w mx ksmrk?"
    // ("Let's wrap this bad boy around a few times!!!!!!", -68) -> shift left by 68 "Vod'c gbkz drsc lkn lyi kbyexn k pog dswoc!!!!!!"

    
    inputStr = "Let's wrap this bad boy around a few times!!!!!!";
    inputNum = -68;

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
    console.log(rotArry.join(""))
};

main();
