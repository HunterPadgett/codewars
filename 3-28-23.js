// 6kyu Sort The Odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
 //   const original = array.slice();
 const oddNums = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
//  use the shift method to grab indexs from the beginning of the oddNums array
 return array.map((num) => (num % 2 !== 0 ? oddNums.shift() : num));
}

sortArray([5, 3, 2, 8, 1, 4]);

// array = [numbers]
// sort the odd nums in the arr while keeping the evens nums in theor original index
// return sorted arr of nums. odd nums sorted in ascending order while even nums stay in original position

// ex:
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// filter? sort?
// const odds = array.filter return arr of odd nums, sort it
// array.map / return new array based on...
// if current num is odd / shift index off odds array. essentially replace current odd num with sorted odd nums from the odd nums array
// else just insert num into its original index
