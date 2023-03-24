// 7 kyu Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//  str = string but can contain any char
//  we want to return true or false based on if the str includes = amounts of x's and o's
//  if str has no x or o -> true
//  if str has only x or o -> false
//  if str has equal amount of x and o check to see if there are the same number in the str

//  create empty object { }
//  loop over str; i < str.length
// create key:value pairs of each instance of str[i]
// if obj.x === obj.o return true
// check other conditons

function XO(str) {
 const counter = {};

 str.split("").forEach((letter) => {
  const lowerLetter = letter.toLowerCase();
  counter[lowerLetter] ? counter[lowerLetter]++ : (counter[lowerLetter] = 1);
 });

  //  if x and o both dont exist return true
 if (!counter.x && !counter.o) return true;
 //  if either x or o dont exist return false
 else if (!counter.x || !counter.o) return false;
 //  if both exist return true or false based on is they equal each other
 else return counter.x === counter.o;
}

console.log(XO("XXXXOOOOOasdasxddvfbfgohrf"));
