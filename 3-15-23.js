// 7 kyu Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// takes in a string
// check to see if the str has no repeating chars aka isogram
// return true if no repeating chars, false if there are repeating chars

// empty str return true
// ignore case sensitivity

// turn str to lowercase
// loop over str.length
// check if current index is last instance of that index
// if at any point its not that last index return false
// otherwise return true

function isIsogram(str) {
 const lowerStr = str.toLowerCase();
 if (str === "") return true;
 for (let i = 0; i < str.length; i++) {
  if (lowerStr.indexOf(lowerStr[i]) !== lowerStr.lastIndexOf(lowerStr[i]))
   return false;
 }
 return true;
}

console.log(isIsogram("Dermatoglyphics"));
