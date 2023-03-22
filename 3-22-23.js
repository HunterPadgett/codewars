// 6 kyu Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_')

// ex:
//  'abc' =>  ['ab', 'c_']
//  'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
 // if str = '' just return an empty array
 if (str.length < 1) return [];

 // declaring an empty array we can work with later
 const arr = [];

 // here i am saying if the current index of str[i] where the iteration is an ODD number...
 // push in the previous iteration of i + the curent iteration of i
 // ['str[0]+str[1]', 'str[2]+str[3]', etc]
 for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) % 2 !== 0) {
   arr.push(str[i - 1] + str[i]);
  }
 }

 //  the condition in the for loop doesnt account for if there is a single letter left over after an odd index and its previous index is pushed
 // so we say so push the last index of str into the array if the str.length is an odd number aka there wont always be a pair for every letter
 if (str.length % 2 !== 0) {
  arr.push(str.at(-1) + "_");
 }

 // boom return the array
 return arr;
}

console.log(solution("abcdefg"));

// optimized solution
function solution2(str) {
 const arr = [];

 // loop over every other index 0, 2, 4, etc.
//  below 'second' will push str[i+1] when it is truthy OR '_' if its falsy
 for (let i = 0; i < str.length; i += 2) {
  const second = str[i + 1] || "_";
  arr.push(str[i] + second);
 }

 return arr;
}

console.log(solution2("abcdefg"));
