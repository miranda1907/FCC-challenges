function fizzBuzzCount(start, end) {
  const fizzBuzzObject = {fizz: 0, buzz: 0}
  const range = (start, stop, step = 1) => 
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

  const fizzbuzzArr = [...range(start,end)];
  for (let el of fizzbuzzArr) {
    if (el % 3 === 0){
    fizzBuzzObject.fizz++;
  } 
    if (el % 5 === 0) {
    fizzBuzzObject.buzz++;
  } 
} 
  return fizzBuzzObject;
}

console.log(fizzBuzzCount(1, 11));
console.log(fizzBuzzCount(14, 41));
console.log(fizzBuzzCount(24, 100));
console.log(fizzBuzzCount(-635, -14));
console.log(fizzBuzzCount(-5432, 6789));
