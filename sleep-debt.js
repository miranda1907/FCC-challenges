function sleepDebt(hoursSlept, targetHours) {

  const hoursNeeded = hoursSlept.map(hour => targetHours - hour).reduce((acc, el)=> acc + el, targetHours);

  return hoursNeeded > 0? hoursNeeded: 0;
}

console.log(sleepDebt([6, 6, 6, 6, 6, 6], 8));
console.log(sleepDebt([6, 7, 8, 4, 8, 6], 7));
console.log(sleepDebt([10, 10, 9, 10, 9, 11], 9));
console.log(sleepDebt([8, 7, 6, 7, 6, 8], 6));
console.log(sleepDebt([8, 9, 10, 9, 10, 7], 7))
;
