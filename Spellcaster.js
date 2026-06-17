function cast(spells) {
  const codes = {
   "f": {spell: "Fire", category: "Destruction", baseScore: 3},
   "l": {spell: "Lightning", category: "Destruction", baseScore: 3},
   "i": {spell: "Ice", category: "Control", baseScore: 2},
   "w": {spell: "Wind", category: "Control", baseScore: 2},
   "h": {spell: "Heal", category: "Restoration", baseScore: 1},
   "s": {spell: "Shield", category: "Restoration", baseScore: 1},
  }

  const arr = spells.split("")
  console.log(arr);
  let sum = codes[arr[0]].baseScore;
  let multiplier = 1;

  for (let i = 1; i < arr.length; i++) {
    
    if (codes[arr[i-1]].category !== codes[arr[i]].category) {
      multiplier++;
    } else {
      multiplier = 1;
    }
 sum += codes[arr[i]].baseScore * multiplier;

  }

  return sum;
}

console.log(cast("fihwl"));
console.log(cast("lwswfi"));
console.log(cast("wislhfl"));
console.log(cast("sihwlih"));
console.log(cast("wishlfihwslwifihl"));
