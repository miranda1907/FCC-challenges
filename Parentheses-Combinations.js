function getCombinations(n) {
   let result = [];

  function build(current, opensUsed, closesUsed) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (opensUsed < n) {
      build(current + '(', opensUsed + 1, closesUsed);
    }

    if (closesUsed < opensUsed) {
      build(current + ')', opensUsed, closesUsed + 1);
    }
  }

  build('', 0, 0);

  return result.length;
}


console.log(getCombinations(2));
console.log(getCombinations(3));
console.log(getCombinations(5));
console.log(getCombinations(8));
console.log(getCombinations(13));
