// First non-repeating character 5kyu
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 'strLower', since the letter strLower only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
 let strLower = s.toLowerCase();
 for (let i = 0; i < strLower.length; i++) {
  if (strLower.indexOf(strLower[i]) === strLower.lastIndexOf(strLower[i]))
   return s[i];
 }
 if (s.length === 1) return s;
 else if (s.length < 1) return "";
}

console.log(firstNonRepeatingLetter("sTresS"));

// turn string into lowercase
// loop, start at 0, go the strings length
// check if strLower.indexOf(strLower[i]) === strLower.lastIndexOf(strLower[i])
// aka if the current letter we're currently at is the last instance of that letter in the str
// return originalStr[i]
// otherwise return empty ''
