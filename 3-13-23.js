// 8kyu Switch it up
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

function switchItUp(number) {
 const strNums = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
 ];
 return strNums[number];
}

console.log(switchItUp(1));
