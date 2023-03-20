// 7 kyu
// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// always taking in a str, it will never be empty
// based in str input, return the length of the shortest word
// ex: "Let's travel abroad shall we" -> 2

// split the str into words [word1, word2, word3]
// map a new array of the words.length
// sort ascending order
// return arr[0]

function findShort(s) {
 return s
  .split(" ")
  .map((word) => word.length)
  .sort((a, b) => a - b)[0];
}

findShort("bitcoin take over the world maybe who knows perhaps");
