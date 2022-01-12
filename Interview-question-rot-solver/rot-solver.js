
let ascii_obj = {};


let create_alpha = () => {

    for(let i = 0; i < 26; i++) {
        ascii_obj[String.fromCharCode(i + 65)] = i + 65;
        ascii_obj[String.fromCharCode(i + 97)] = i + 97;
    };
    return;
};

let shift_lower = (char, shift_amt) => {

    let shift = 0;
    // for shift to right
    if(shift_amt > 0) {
             
        if(ascii_obj[char] + shift_amt > 122) {
            shift = (ascii_obj[char] - 26) + shift_amt;
            return(String.fromCharCode(shift))
        }
        else {
            return(String.fromCharCode(ascii_obj[char] + shift_amt));
        };
    }
    // shift left
    else {

        shift = 0;

        if(ascii_obj[char] - Math.abs(shift_amt) < 97) {
            shift = (ascii_obj[char] - shift_amt) - shift_amt;
            return(String.fromCharCode(shift))
        }
        else {
            return(String.fromCharCode(ascii_obj[char] - Math.abs(shift_amt)));
        };
    };
    
    
};

let shift_upper = (char, shift_amt) => {

    let shift = 0;
    // for shift to right
    if(shift_amt > 0) {
             
        if(ascii_obj[char] + shift_amt > 90) {
            shift = (ascii_obj[char] - 26) + shift_amt;
            return(String.fromCharCode(shift))
        }
        else {
            return(String.fromCharCode(ascii_obj[char] + shift_amt));
        };
    }
    // shift left
    else {
        return
    };

};

let is_alpha = (char) => {
    
    return /^[A-Z]$/i.test(char);
            
}  
 // original_position - 26 + position int
let main = () => {
       
let word = "aaa";
let shift_amt = -1;
let enc_word = [];
create_alpha();

for(let i = 0; i < word.length; i++) {
    if(is_alpha(word[i])) {

        if(word[i] == word[i].toLowerCase()) {
            enc_word.push(shift_lower(word[i], shift_amt)); 
        }
        else{
            enc_word.push(shift_upper(word[i], shift_amt));
        };
         
    }
    else {
        enc_word.push(word[i])
        continue;
    };
};
console.log(enc_word)

};

main();