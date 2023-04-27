// 8 kyu
// All Star Code Challenge #18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter) {
 if (str.length < 1 || !str.includes(letter)) return 0;

 const strObj = str.split("").reduce((obj, letter) => {
  if (!obj[letter]) obj[letter] = 0;
  obj[letter]++;
  return obj;
 }, {});

 return strObj[letter];
}

strCount("ww234n", "z");

// str = 'yo whats up'; letter = 'a-z';
// if str.length >= 1 ...
// create an empty { }
// iterate over the letters in the str
// create key:value pairs for occurance of a letter
// { y:1, o:1, }
// obj.letter
