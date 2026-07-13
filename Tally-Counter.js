function getTallyCount(str) {
  const arr = str.split(" ");
  let count = 0;
  console.log(arr);

  for ( let i = 0; i < arr.length; i++) {
    arr[i].includes("/") ? count+= 5 : count+=arr[i].length;
  }

  return count;
}

console.log(getTallyCount("||||"));
console.log(getTallyCount("||||/"));
console.log(getTallyCount("||||/ |||"));
console.log(getTallyCount("||||/ ||||/ ||||/ ||"));
console.log(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |"));
