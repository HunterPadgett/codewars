// Return Negative 8kyu
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

// so first we need to check if num is <= 0
// if thats the case, just return the num
// else convert the num to a negative num
// you can convert postive ints to negative ints with -Math.abs()

function makeNegative(num) {
 if (num <= 0) {
  return num;
 } else {
  return -Math.abs(num);
 }
}