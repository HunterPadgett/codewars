// Take the First N Elements
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

function take(arr, n) {
  const test = arr.slice(0, n);
  return test
}

take([0, 1, 2, 3, 5, 8, 13], 3)