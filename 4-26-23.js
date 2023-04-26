// 7 kyu
// Find the capitals

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// capitals('CodEWaRs'), [0,3,4,6]

// Solution

function capitals(word) {
 word = word.split("");
 let result = [];
 word.forEach((letter, index) => {
  if (letter === letter.toUpperCase()) result.push(index);
 });
 return result;
}
