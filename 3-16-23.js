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
