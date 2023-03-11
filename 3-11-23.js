// 8 kyu Rock Paper Scissors!

const rps = (p1, p2) => {
 if (p1 === p2) return "Draw!";
 else if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
 else if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
 else if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
 else return "Player 2 won!";
};

// 7 kyu Fizz Buzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

function fizzbuzz(n) {
 const fizzbuzzArr = [];
 for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) fizzbuzzArr.push("FizzBuzz");
  else if (i % 3 === 0) fizzbuzzArr.push("Fizz");
  else if (i % 5 === 0) fizzbuzzArr.push("Buzz");
  else fizzbuzzArr.push(i);
 }
 return fizzbuzzArr;
}
