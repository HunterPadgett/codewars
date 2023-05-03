// 7 kyu
// Check the exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(a1, a2) {
 let score = 0;
 for (let i = 0; i < a1.length; i++) {
  if (a1[i] === a2[i]) {
   score += 4;
  } else if (a2[i] === "") {
   score += 0;
  } else {
   score -= 1;
  }
 }
 return score < 0 ? 0 : score;
}


// P two arrays... are not empty and are the same length. can have empty strings in a2.
// R return score or return 0 if score is < 0
// E example: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// P set up a for loop, go the length of array1, check if a1[i]  === a2[i] add 4 to score, else if a2[i] === "" add 0 to score, else add -1 to score 