// 6 kyu Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// take in param of string.
//  - string is always going to be a string of one or more words.
//  - Strings passed in will consist of only letters and spaces.
//  - Spaces will be included only when more than one word is present.

// our goal is to return the string passed in, but we need to reverse all words >= 5 letters

// ex: "Hey fellow warriors" -> "Hey wollef sroirraw"
//     "This is a test" -> "This is a test"

// temp 'str' or temp [arr]
// split the string param into words
// test the length of those words
// if words.length >= 5, reverse the word
// else we just want the word
// add each instance to temp str or arr
// return new str in formatted way

function spinWords(string) {
 const strArr = [];

 string.split(" ").forEach((word) => {
  if (word.length >= 5) strArr.push(word.split("").reverse().join(""));
  else strArr.push(word);
 });
 return strArr.join(" ");
}

// a way to do it using the map method instead

function spinWords2(str) {
 return str
  .split(" ")
  .map((word) => (word.length >= 5 ? word.split("").reverse().join("") : word))
  .join(" ");
}

console.log(spinWords2("This is another test"));
