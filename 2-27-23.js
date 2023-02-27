// Mumbling 7kyu
// This time no story, no theory. The examples below show you how to write function accum
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// for each letter passed into the argument the return will change, return a new string based on the length of letters in original str
// split the str, map over it array of letters, concat uppercase letter + the letter in lowercase and repeat based on the index you're at, then join the new array returned from the map into the new string

function accum(s) {
 return s
  .split("")
  .map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i))
  .join("-");
}

console.log(accum("String"));
