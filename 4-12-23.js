// Find the middle element 7kyu
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers

// For example:
// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1

// fn always takes in an arr of 3 nums
// we need to find the index of the middle element (based on numerica value)
// create a copy of the arr by using slice(). that way we dont mutate the og arr
// can then sort the copied arr in asc order and grab the 1st index to get the middle el
// can then find the indexOf that middle el in the og arr


function gimme(triplet) {
 const middleEl = triplet.slice().sort((a, b) => a - b)[1];
 return triplet.indexOf(middleEl);
}
