// 6 kyu
// Title Case

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
 const lowercaseTitle = title.toLowerCase();
 const lowercaseMinorWords = minorWords ? minorWords.toLowerCase() : "";
 const titleArr = lowercaseTitle.toLowerCase().split(" ");
 const minorWordsArr = lowercaseMinorWords.toLowerCase().split(" ");

 const capitalizedTitle = titleArr.map((word, index) => {
  if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);

  if (minorWordsArr.includes(word)) return word;

  return word.charAt(0).toUpperCase() + word.slice(1);
 });
 return capitalizedTitle.join(" ");
}

// Example fn call
titleCase("a clash of KINGS", "a an the of"); // Returns: "A Clash of Kings"
