function getMaxProfit(prices, budget) {
  let maxprofit = 0; 
  let buyingPrice = prices[0]; 

  for (let i = 0; i < prices.length; i++) {
    let shares = Math.floor(budget/buyingPrice);

    let profit = shares * (prices[i] - buyingPrice); 

    if (maxprofit < profit) {
      maxprofit = profit;
    }

    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }
  }
  return maxprofit.toFixed(2);
}

console.log(getMaxProfit([5, 6], 50));
console.log(getMaxProfit([8, 2, 5, 10], 20));
console.log(getMaxProfit([4, 5, 3, 6], 20));
console.log(getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200));
console.log(getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80));
console.log(getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25));
