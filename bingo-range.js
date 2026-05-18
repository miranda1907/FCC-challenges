function getBingoRange(letter) {
   const range = (start, stop, step = 1) => 
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  let arr = []

  switch(letter){
    case "B":
    arr = range(1,15);
    break;

    case "I":
    arr =range(16,30);
    break;

    case "N":
    arr = range(31,45);
    break;

    case "G":
    arr = range(46,60);
    break;

    case "O":
    arr = range(61,75);
    break;
  }


  return arr;
}

console.log(getBingoRange("B"))
console.log(getBingoRange("I"))
console.log(getBingoRange("N"))
console.log(getBingoRange("G"))
console.log(getBingoRange("O"))