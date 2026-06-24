function makeLeet(str) {
  const leets = {
    "a": 4,
    "e": 3,
    "g": 9,
    "i": 1,
    "l": 1,
    "o": 0,
    "s": 5,
    "t": 7
  };

  const arr = str.split("");
 
  return arr.map(
    el => 
    leets.hasOwnProperty(el) ?
    leets[el] : el    
  ).join("");
}

console.log(makeLeet("cool"));
console.log(makeLeet("leet"));
console.log(makeLeet("hacker"));
console.log(makeLeet("satellite"));
console.log(makeLeet("abcdefghijklmnopqrstuvwxyz"));
