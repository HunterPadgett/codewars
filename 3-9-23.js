// 7 kyu Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
 const sortedArr = numbers.sort((a, b) => a - b);
 return sortedArr[0] + sortedArr[1];
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43]);

// takes in an array of nums
// return the sum of the 2 smallest nums in the array
// input will always be a positive whole number and will alwys have at least 4 nums in the array

// sort the array small -> large
// grab the 0th and 1st index and get the sum of those 2 nums
// return that sum
