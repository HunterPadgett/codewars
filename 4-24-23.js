// 8 kyu
// Total amount of points
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// 
// set up a temp variable holding the value of zero that we will use to store our total points
// loop over the array
// since our array is set up like .... ["3:1", "2:2", "0:1", ...] .... we can split each element and destructure the array so we have two numbers we can compare each other to
// do the comparison, add the value to the temp variable, return the temp variable holding our total score

function points(games) {
 let sum = 0;
 games.forEach((game) => {
  const [x, y] = game.split(":");
  if (Number(x) > Number(y)) sum += 3;
  else if (Number(x) === Number(y)) sum += 1; 
 });
 return sum;
}
