// 6 kyu Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphaPosition(str) {
 const lowerStr = str.toLowerCase();
 const alphabet = "abcdefghijklmnopqrstuvwxyz";
 let result = "";

 for (let i = 0; i < str.length; i++) {
  const letter = lowerStr[i];
  const letterIndex = alphabet.indexOf(letter);
  if (letterIndex > -1) {
   result += `${letterIndex + 1} `;
  }
 }

 console.log(result.trim());
 return result.trim()
}
alphaPosition("The sunset sets at twelve o' clock.");

// take in a string as a parameter

// return every letter in the string with its position in the alphabet

// ex. a=1, b=2, c=3, etc.
// only account for letters and not spec chars like . ' " - ? !

// convert str param to lowercase
// create a str with all letters of alphabet
// declare a var result = ''
// loop through each character in the input. For each character check if it exists in alphabet using the indexOf() method. If it does, we add its position in alphabet to the result string, plus a space character. We add 1 to the position because we want the positions to start from 1 instead of 0.
// Finally, we return the result string after trimming any leading or trailing white spaces.
