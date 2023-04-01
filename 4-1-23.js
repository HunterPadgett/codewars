// A Needle in the Haystack 8kyu
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
 const indexOfNeedle = haystack.indexOf("needle");
 return `found the needle at position ${indexOfNeedle}`;
}

findNeedle([
 "3",
 "123124234",
 undefined,
 "needle",
 "world",
 "hay",
 2,
 "3",
 true,
 false,
]);
