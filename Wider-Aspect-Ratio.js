function getWiderAspectRatio(a, b) {
  const aArray = a.split("x").map(el => parseInt(el));
    console.log(aArray);
  const gcd = (c, d) => (d === 0 ? c : gcd(d, c % d));
  const bArray = b.split("x").map(el => parseInt(el));
  console.log(bArray);
  const gcdA = gcd(aArray[0], aArray[1]);
  console.log(gcdA);
  const gcdB = gcd(bArray[0], bArray[1]);
  console.log(gcdB);
  const ratioA = aArray.map(el => el / gcdA);
  console.log(ratioA);
  const ratioB = bArray.map(el => el / gcdB);
  console.log(ratioB);

  return ratioA[0] / ratioA[1] > ratioB[0] / ratioB[1] ? ratioA.join(":") : ratioB.join(":");
}

console.log(getWiderAspectRatio("1920x1080", "800x600"));
console.log(getWiderAspectRatio("1080x1350", "2048x1536"));
console.log(getWiderAspectRatio("640x480", "2440x1220"));
console.log(getWiderAspectRatio("360x640", "1080x1920"));
console.log(getWiderAspectRatio("3440x1440", "2048x858"));
console.log(getWiderAspectRatio("12345x61234", "12534x51234"));
