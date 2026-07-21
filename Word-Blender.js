function blendWords(word1, word2) {
  const sliceFromWord1 = word1.length % 2 === 0 ? word1.length/2 : Math.floor(word1.length/2);
  const sliceFromWord2 = word2.length % 2 === 0 ? word2.length/2 : Math.floor(word2.length/2);
  console.log([sliceFromWord1, sliceFromWord2]);

  return word1.slice(0,sliceFromWord1) + word2.slice(sliceFromWord2);
}

console.log(blendWords("turtle", "toucan"));
console.log(blendWords("chipmunk", "flamingo"));
console.log(blendWords("falcon", "pelican"));
console.log(blendWords("hyena", "iguana"));
console.log(blendWords("scorpion", "gorilla"));
console.log(blendWords("platypus", "wolverine"));
