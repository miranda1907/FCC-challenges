function isValidCard(number) {
  const numArray = number.split("").map(el => parseInt(el));

  let sum = 0;

  for(let i = numArray.length -1; i >=0; i--) {
    let num = numArray[i];

    if ((numArray.length - 1 -i) % 2 === 1){
      num *= 2;

      if (num > 9) num -= 9;
    }
    sum+=num;
  }
  return sum % 10 === 0
}

console.log(isValidCard("4532015112830366"));
console.log(isValidCard("5425233430109903"));
console.log(isValidCard("371449635398431"));
console.log(isValidCard("6011111111111117"));
console.log(isValidCard("4532015112830367"));
console.log(isValidCard("1234567890123456"));
console.log(isValidCard("4532015112830368"));
