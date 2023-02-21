// Count characters in your string 6kyu
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  const strArr = string.split('')
  const countChar = strArr.reduce((obj, char, i) => {
    if (!obj[char]) obj[char] = 0;
    obj[char] ++;
    return obj
  }, {})
  return countChar
}

// split the string into a sub array
// loop over that array using reduce
// use empty obj as accumulator value
// check to see if key of char exists in the obj - if not, set it = 0
// incriment the value of each time the key is seen in the loop
// return the obj