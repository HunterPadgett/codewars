// 7 kyu
// Form The Minimum

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// get rid of duplicates in the input list

function minValue(values) {
  const set = new Set(values);
  return Number([...set].sort((a, b) => a - b).join(""));
}
