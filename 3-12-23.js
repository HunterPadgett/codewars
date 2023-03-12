// 8 kyu Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
 return x.reduce((acc, num) => {
  return acc + Number(num);
 }, 0);
}

sumMix([9, 3, "7", "3", 10, "15"]);

// x = [numbers & strings of numbers]
// return the sum of every number in the [], treat strings of numbers as real numbers
// covert strings of nums to actual nums

// use reduce method to get to the sum
// convert every element to a number with the Number method inside of the reduce
// return the sum
