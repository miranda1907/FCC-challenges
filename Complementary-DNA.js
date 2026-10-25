function complementaryDNA(strand) {
  const sequenceArray = strand.split("")
  console.log(sequenceArray);
  const changedSequence = [];

  for ( let char of sequenceArray ) {
    if ( char == "A") {
      changedSequence.push("T")
    } else if ( char == "T") {
      changedSequence.push("A");
    } else if ( char == "C") {
      changedSequence.push("G");
    } else if ( char == "G") {
      changedSequence.push("C");
    }
  }  

  return changedSequence.join("");
}

console.log(complementaryDNA("ACGT"))
console.log(complementaryDNA("ATGCGTACGTTAGC"))
console.log(complementaryDNA("GGCTTACGATCGAAG"))
console.log(complementaryDNA("GATCTAGCTAGGCTAGCTAG"))
