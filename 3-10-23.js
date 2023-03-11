// 6 kyu Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// function twoSum(numbers, target) {
//  //  initialize an empty object, which will be used to store the previous values that have been processed. Then, it loops through each element in the numbers array using a for loop.
//  const prevValues = {};
//  for (let i = 0; i < numbers.length; i++) {
//   const currentNum = numbers[i];
//   // calculates the difference between the target and the current number
//   const neededValue = target - currentNum;
//   // It then checks if the neededValue is already in the prevValues object
//   const index2 = prevValues[neededValue];
//   // console.log(index2, i);

//   // If neededValue is in prevValues, it means that we have already seen a number that, when added to the current number, equals the target. In this case, the function returns an array containing the index of the current number and the index of the number in the prevValues object.
//   if (index2 != null) {
//    return [index2, i];
//   } else {
//    // stores the current number and its index in the prevValues object so that it can be used to check future numbers.
//    prevValues[currentNum] = i;
//   }
//  }
// }

function twoSum(arr, target) {
 const hash = {};
 for (let i = 0; i < arr.length; i++) {
  const currentNum = arr[i];
  const targetNum = target - currentNum;
  const index2 = hash[targetNum];
  console.log(currentNum, targetNum, index2);

  if (index2 == undefined) {
   hash[currentNum] = i;
  } else {
   return [index2, i];
  }
  console.log(hash);
 }
}

console.log(twoSum([1, 2, 3], 4));

// numbers = [num, num] always an array of at least two valid numbers
// target = will always be the sum of two numbers from the numbers array

// return an array of the indices of the two numbers that = target
// ex: twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
