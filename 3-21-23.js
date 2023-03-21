// 7 kyu Printer Errors
// a to m = good
// n to z = error
// test a string to see how many errors occur
// return num of errors and total str length like so "8/22" or "4/10", "0/20"
// "aaabbbbhaijjjm" => "0/14"
// "aaaxbbbbyyhwawiwjjjwwm" => "8/22
// s = str from a-z with a length >= 1
// return str that counts how many letters from n-z are in s. in a format like '8/22'
// arr [bad letters]
// s.split('') filter [bad letter].includes(letter).length

function printerError(s) {
 const badLetters = "nopqrstuvwxyz".split("");
 const errors = s.split("").filter((letter, i) => badLetters.includes(letter));
 return `${errors.length}/${s.length}`;
}

printerError("aaaxbbbbyyhwawiwjjjwwm");
