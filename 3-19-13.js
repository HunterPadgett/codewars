// 7 kyu Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// ex: "test" -> 'es'. "testing" -> 't'. 'middle' -> 'dd'

function getMiddle(s) {
 if (s < 3) return s;

 if (s.length % 2 === 0) {
  const evenMiddle = s.length / 2;
  return s[evenMiddle - 1] + s[evenMiddle];
 } else {
  const oddMiddle = Math.floor(s.length / 2);
  return s[oddMiddle];
 }
}

// take in a string, return middle char of the str
// if str.length is odd, return middle char
// if str.length is even, return middle 2 chars
