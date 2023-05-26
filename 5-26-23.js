// 8 kyu
// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr.length < 1) return 0;
  return arr.reduce((acc, num) => num >= 1 ? acc + num : acc + 0, 0)
}

// P : an array of numbers
// R : the sum of all postive nums in the array
// E : [1,-4,7,12] => 1 + 7 + 12 = 20
// P : check if the arr is empty, if so return 0
//     use reduce to sum up all the positive nums and then return the sum
//     inside of the reduce use a conditional to check if the num is postive, if soo add it to the acc, if not add nothing to the acc