function getBestHand(cards) {
  const values = {
    "2": 2, "3": 3, "4": 4, "5": 5,
    "6": 6, "7": 7, "8": 8, "9": 9,
    "T": 10, "J": 11, "Q": 12,
    "K": 13, "A": 14
  };

  const rankObj = {};
  const suitObj = {};

  for (const card of cards) {
    const rank = card[0];
    const suit = card[1];

    rankObj[rank] = (rankObj[rank] || 0) + 1;
    suitObj[suit] = (suitObj[suit] || 0) + 1;
  }

  const counts = Object.values(rankObj);
  const nums = cards
    .map(c => values[c[0]])
    .sort((a, b) => a - b);

  const flush = Object.values(suitObj).includes(5);

  const straight =
    nums.every((n, i) => i === 0 || n === nums[i - 1] + 1) ||
    JSON.stringify(nums) === "[2,3,4,5,14]";

  const royal = JSON.stringify(nums) === "[10,11,12,13,14]";

  if (flush && royal) return "Royal Flush";
  if (flush && straight) return "Straight Flush";
  if (counts.includes(4)) return "Four of a Kind";
  if (counts.includes(3) && counts.includes(2)) return "Full House";
  if (flush) return "Flush";
  if (straight) return "Straight";
  if (counts.includes(3)) return "Three of a Kind";

  const pairs = counts.filter(n => n === 2).length;

  if (pairs === 2) return "Two Pair";
  if (pairs === 1) return "Pair";

  return "High Card";
}

console.log(getBestHand(["7s", "7h", "7d", "2c", "5h"]));
console.log(getBestHand(["Ks", "Kh", "Kd", "4s", "4h"]));
console.log(getBestHand(["2h", "5h", "7h", "9h", "Jh"]));
console.log(getBestHand(["As", "Ah", "Ad", "Ac", "Kh"]));
console.log(getBestHand(["Ts", "Th", "9d", "9c", "8h"]));
console.log(getBestHand(["9c", "8c", "7c", "6c", "5c"]));
console.log(getBestHand(["As", "Kh", "Jd", "8c", "5h"]));
console.log(getBestHand(["As", "2h", "3d", "4c", "5h"]));
console.log(getBestHand(["Ts", "Th", "7c", "6d", "5h"]));
console.log(getBestHand(["As", "Ks", "Qs", "Js", "Ts"]));
