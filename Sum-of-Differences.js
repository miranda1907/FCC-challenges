function sumOfDifferences(arr) {
  const differences = [];

  for (let i = 0; i < arr.length - 1; i++) {
    differences.push(arr[i+1] - arr[i])
  }
  return differences.reduce((acc,cur) => 
    acc + cur, 0
  );
}

console.log(sumOfDifferences([1, 3, 4]));
console.log(sumOfDifferences([5, -3, 3, 9, 10]));
console.log(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]));
console.log(sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]));
