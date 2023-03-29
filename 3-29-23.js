// Consecutive strings 6kyu

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

// set a temp string
// start a loop where you go up until i <= arr.length - k. arr.length - k represents the last index from where we can start slicing the strarr array with k consecutive strings.
// you then create a temp str which is the strarr sliced starting at index  i, and ending at i + whatever k is. this will give you an array of words based on k that you can then join together into a single string.
// then you check to see if that temp str.length > the longest.length and if so make longest = temp
// return temp

function longestConsec(strarr, k) {
 const n = strarr.length;
 if (n === 0 || k <= 0 || k > n) return "";

 let longest = "";

 for (let i = 0; i <= n - k; i++) {
  const temp = strarr.slice(i, i + k).join("");
  if (temp.length > longest.length) longest = temp;
 }

 return longest;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);



function longestConsec(strarr, k) {
 const n = strarr.length;
 if (n === 0 || k > n || k <= 0) return "";
 let longest = "";
 for (let i = 0; i <= n - k; i++) {
  const temp = strarr.slice(i, i + k).join('');
  if (temp.length > longest.length) longest = temp;
 }
 return longest;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
