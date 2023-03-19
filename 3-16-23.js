// 7 Complementary DNA
// In DNA strings, symbols "A" and "T" are complements of each other and  "C" and "G" are also complements
// you need to return the other complementary side. DNA strand is never empty
// examples:
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
 let temp = "";
 for (let i = 0; i < dna.length; i++) {
  if (dna[i] === "A") temp += "T";
  else if (dna[i] === "T") temp += "A";
  else if (dna[i] === "C") temp += "G";
  else if (dna[i] === "G") temp += "C";
 }
 return temp;
}

// take in param dna = string that consists of 'A' 'T' 'C' 'G'
// turn all instances of 'A' -> 'T' and vice versa
// turn all instances of 'C' -> 'G' and vice versa
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// return the complementary str of dna

// use conditionals to check if letter is x have a temp str += y

function sum(...args) {
 return args.reduce((acc, num) => acc + num);
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

function getNames(arr) {
 const names = arr.filter((obj) => obj.userName).map((obj) => obj.userName);
 console.log(names);
}

console.log(
 getNames([
  { a: 1 },
  { userName: "Jane" },
  {},
  { userName: "Don" },
  { userName: "Bob" },
  { b: 2 },
 ])
);
