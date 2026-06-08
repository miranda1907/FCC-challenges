function lastLoadDate(scoops, usage) {

  const avgDailyUsage = usage.reduce((acc, curr) => acc + curr, 0) / usage.length;
  console.log(avgDailyUsage);

  return Math.floor(scoops/avgDailyUsage);
}

console.log(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]));
console.log(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]));
console.log(lastLoadDate(33, [5, 0, 4, 3, 3, 2]));
console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]));
console.log(lastLoadDate(20, [13, 9, 12, 10, 8]));
