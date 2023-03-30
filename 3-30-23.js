// Removing Elements 8kyu
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

// push every even index into a new array and return it

function removeEveryOther(arr) {
 const newArr = [];
 for (let i = 0; i < arr.length; i += 2) {
  newArr.push(arr[i]);
 }
 return newArr;
}
