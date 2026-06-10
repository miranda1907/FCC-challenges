function factorial (n) {
  if ( n < 0) return undefined; 

  let result = 1; 

  for(let i = 1; i <= n; i++) {
    result *= i;
  }
 return result;
} 

function getItineraryCount(stops) {

  const len = stops.length;

  return factorial(len) * ((len - 1) +(len - 2));
}


console.log(getItineraryCount(["library", "park"]));
console.log(getItineraryCount(["library", "park", "arcade"]));
console.log(getItineraryCount(["library", "park", "arcade", "store"]));
console.log(getItineraryCount(["library", "park", "arcade", "store", "cafe"]));
console.log(getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]));
