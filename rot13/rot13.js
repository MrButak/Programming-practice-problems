const regex = /[a-z]/gi;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Function determines if a character is part of the English alphabet
function checkForLetter(char) {

    return !char.search(regex) ? true : false;
};

// Function determines if a letter is lower case
function isLetterLowerCase(letter) {

	return letter.toLowerCase() == letter;
};

// Function will shift letter forward 13 spaces and wrap
function rotateChar(letter, letterIndex) {
	
	let isLower = isLetterLowerCase(letter);
    let rotatedChar = alphabet[letterIndex + 13 - 26];
    
    return isLower ? rotatedChar : rotatedChar.toUpperCase();
};

// Main function
function rot13(message){
  
  	let characterArray = [];

  	message.split('').forEach((char) => {

		// check if character is English letter
		if(checkForLetter(char)) {

			// determine if letter needs to be 'wrapped'
			let letterIndex = alphabet.indexOf(char.toLowerCase());
			if(letterIndex + 13 > 25) {

				characterArray.push(rotateChar(char, letterIndex))
			}
			// if letter does not need to be 'wrapped', shift forward 13
			else {
				isLetterLowerCase(char) ?
				characterArray.push(alphabet[letterIndex + 13]) :
				characterArray.push(alphabet[letterIndex + 13].toUpperCase())
			};
		}
		
		else { characterArray.push(char); } 
	});

	return characterArray.join('');
};

// Tests
console.assert(rot13("2n") === "2a");
console.assert(rot13("Test") === "Grfg");
console.assert(rot13("Hey How's it going?") === "Lic Lsa'w mx ksmrk?");
