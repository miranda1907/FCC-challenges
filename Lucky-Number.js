function getLuckyNumber(name) {
  const vowels= ["a", "i", "e", "o", "u"]
  const nameArray= name.toLowerCase().trim().split(/\s+/);

  const count=nameArray.map(n => n.length);
  console.log(count);

  let firstNameVowelCount= 0;
  let firstNameConsonantCount=0;
  let lastNameVowelCount=0;
  let lastNameConsonantCount=0;
  const firstName = nameArray[0];
  const lastName = nameArray[1];

  for (let i = 0; i < firstName.length; i++) {
    vowels.includes(firstName[i]) ?
      firstNameVowelCount++ : firstNameConsonantCount++;
    
  }

    for (let i = 0; i < lastName.length; i++) {
    vowels.includes(lastName[i]) ? 
      lastNameVowelCount++ : lastNameConsonantCount++;
  }

const smallVowels = Math.min(firstNameVowelCount, lastNameVowelCount);
const largeVowels = Math.max(firstNameVowelCount, lastNameVowelCount);

const smallConsonants = Math.min(firstNameConsonantCount, lastNameConsonantCount);
const largeConsonants = Math.max(firstNameConsonantCount, lastNameConsonantCount);

const luckyN = largeVowels * largeConsonants * Math.max(...count) - smallVowels * smallConsonants * Math.min(...count);
  
  return luckyN === 0 ? 13 : luckyN; 
}

console.log(getLuckyNumber("John Doe"));
console.log(getLuckyNumber("Olivia Lewis"));
console.log(getLuckyNumber("James Wilson"));
console.log(getLuckyNumber("Elizabeth Hernandez"));
console.log(getLuckyNumber("Mike Walker"));
console.log(getLuckyNumber("Chloe Perez"));
