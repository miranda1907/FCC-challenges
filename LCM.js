function lcm(a, b) {

  const multiples = Array.from({ length: a * b + 1}, (_, i) => i + b).filter(num => num % a == 0 && num % b == 0) 

  return Math.min(...multiples);
}

console.log(lcm(4, 6))
console.log(lcm(9, 6))
console.log(lcm(10, 100))
console.log(lcm(13, 17))
console.log(lcm(45, 70))
