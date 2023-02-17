// Take a Ten Minutes Walk 6 kyu
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
 //   input will always be an array of strings = 'n' 'e' 's' or 'w'
 //   filter the original array based on directions then get the length of the filtered arrays
 const north = walk.filter((el) => el === "n").length;
 const south = walk.filter((el) => el === "s").length;
 const east = walk.filter((el) => el === "e").length;
 const west = walk.filter((el) => el === "w").length;

 //   check to make sure walk takes 10 mins bc thats the only condition where we want true
 if (walk.length === 10) {
  // if the lengths of north and south are the same AND lengths of east and west are the same return true
  if (north === south && west === east) return true;
  // otherwise return false
  else return false;
 } else {
  // if the array.length isnt 10 return false regardless
  return false;
 }
}

isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
