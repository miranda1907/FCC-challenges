function fixNumerals(str) {
  let result = 0;

  const arr = str.split("");

  for ( let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
    case "I":
    result += 1;
    break;

    case "V":
    result += 5;
    break;

    case "X":
    result += 10;
    break;

    case "L":
    result += 50;
    break;

    case "C":
    result += 100;
    break;

    case "D":
    result += 500;
    break;

    case "M":
    result += 1000;
    break;
  }
  }
  let correctStr = "";  

  const map = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

for (let [symbol, value] of map) {
  while (result >= value) {
    correctStr += symbol;
    result -= value;
  }
}  
    return correctStr;
}

console.log(fixNumerals("XIIIII"));
console.log(fixNumerals("IIIILX"));
console.log(fixNumerals("XXVVVIIIII"));
console.log(fixNumerals("MDCCLXXXXVIIII") );
console.log(fixNumerals("IIIIVVVVXXXXLLLLCCDD"));
console.log(fixNumerals("ILCDMIVDIIXLCVCXDL"));
