function isValidCard(number) {
  const arr = number.split("").map(el=> Number(el));
  console.log(arr);

  const sliced = arr.slice(0, arr.length -1);

  const doubled =[];

  for (let i = 0; i< sliced.length; i++) {
    if ((sliced.length - 1 - i) % 2 === 0) {
      sliced[i] * 2 > 9? doubled.push(sliced[i] *2 -9) : doubled.push(sliced[i] * 2)
    } else {
      doubled.push(sliced[i])
    }
  }
  console.log(doubled);

  const finalArray = doubled.concat(arr[arr.length-1]);
  console.log(finalArray);

  return finalArray.reduce((acc,cur)=> acc+cur, 0) % 10 === 0;
}

console.log(isValidCard("4532015112830366"));
console.log(isValidCard("5425233430109903"));
console.log(isValidCard("371449635398431"));
console.log(isValidCard("6011111111111117"));
console.log(isValidCard("4532015112830367"));
console.log(isValidCard("1234567890123456"));
console.log(isValidCard("4532015112830368"));
