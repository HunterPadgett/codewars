// 8 kyu
// Difference of Volumes of Cuboids

// fn takes two arrays of 3 ints representing the dimensions of two cuboids
// goal is to find the difference between the two cuboids' volumes
// to do this we first need to find the product of each array, then find the difference based on whichever product is a higher num
// // we can use reduce on each arr to find its product
// // then we can use conditional logic to find the higher product
// // then we can use that product to find the difference
// // return the difference

function findTheDifference(a, b) {
 const aProduct = a.reduce((acc, curr) => acc * curr, 1);
 const bProduct = b.reduce((acc, curr) => acc * curr, 1);
 return aProduct > bProduct ? aProduct - bProduct : bProduct - aProduct;
}

findTheDifference([3, 2, 5], [1, 4, 4]);

// time complexity: O(n)
//  space complexity: O(1)
