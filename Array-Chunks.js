function chunkArray(arr, size) {
  const newArr = [];

  const numberOfArrays = (arr.length % size === 0 ? arr.length/size : Math.ceil(arr.length/size));
  console.log(numberOfArrays)
  
    for (let i = 0; i < numberOfArrays; i++) {

      newArr.push(arr.splice(0,size))     
     }

  return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
console.log(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 3));
console.log(chunkArray(["a", "b", "c", "d", "e"], 1));
console.log(chunkArray([1, 2, 3], 5));
