// find the unique number 6kyu
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// return the number that doesnt have a match
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
 const sorted = arr.sort((a, b) => a - b);
 if (sorted[0] !== sorted[1]) return sorted[0];
 return sorted.at(-1);
}