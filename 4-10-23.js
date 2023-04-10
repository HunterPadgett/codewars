// Counting Duplicates 6kyu
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

function duplicateCount(text) {
 const newText = text.toLowerCase();
 const dupes = newText.split("").reduce((obj, el) => {
  if (!obj[el]) obj[el] = 0;
  obj[el]++;
  return obj;
 }, {});
 return Object.values(dupes).filter((el) => el > 1).length;
}

// we want to return a number of how many times a char is repeated in a  string
//  we need it to be case insensitive so we turn the str into lowercase
//  we then create an object holding key/value pairs of how many times a specific char in the str in repeated
// we then create an array of the values of that object so we can iterate of it
// once we have that array of values, we are only concerned with the values that are greater than 1 aka values that have been duplicated
// so we filter the values based on if they are > 1 and return the length of that array whcih will be the number of duplicate chars in the string.