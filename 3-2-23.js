// 7 kyu String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// for this we can just use the endsWith() string method to test if the 1st arg ends with the 2nd arg

function solution(str, ending) {
 return str.endsWith(ending);
}

console.log(solution("alert", "ert"));
