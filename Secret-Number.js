function guessNumber(secret, guess) {
  let result;
  switch(true) {
    case secret > guess:
    result = "higher";
    break; 

    case secret < guess:
    result = "lower";
    break;

    case secret === guess:
    result = "you got it!"
    break;
  }
  return result;
}

console.log(guessNumber(50, 30));
console.log(guessNumber(85, 99));
console.log(guessNumber(2026, 2026));
console.log(guessNumber(92904, 11283));
console.log(guessNumber(230495, 423920));
console.log(guessNumber(120349, 120349));
