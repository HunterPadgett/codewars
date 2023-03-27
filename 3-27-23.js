// 6 kyu Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times

// create key value pairs of the numbers in the array and keep track of how many times it occurs
// then loop over the obj using a for in loop and find value that is odd and return the matching key for the odd value. 

function findOdd(A) {
 const obj = {};
 A.forEach((num) => {
  obj[num] ? obj[num]++ : (obj[num] = 1);
 });

 for (const key in obj) {
  if (obj[key] % 2 !== 0) return Number(key);
 }
}