// 8kyu
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// so here we loop backwards starting at n and ending at 1
// then push each iteration of i into an array
// return that arr

const reverseSeq = (n) => {
 const arr = [];

 for (let i = n; i > 0; i--) {
  arr.push(i);
 }
 return arr;
};

reverseSeq(5);

// Categorize New Member 7kyu
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] will be arr of arrays
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] will be an arr of strings

// so we know we want to return an array at the end so we can probably use map
// destructure the array of arrays in the map, check if age is at least 55 years old and handicap is > 7
// if true add in "senior" else add in "open"

function openOrSenior(data) {
 return data.map(([age, handicap]) =>
  age >= 55 && handicap > 7 ? "Senior" : "Open"
 );
}

console.log(
 openOrSenior([
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
 ])
);
