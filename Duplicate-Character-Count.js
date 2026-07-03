function duplicateCharacterCount(str1, str2) {
  let count = 0;
  const arr = str2.split("");

  for ( let i = 0; i < arr.length; i++) {
    if (str1.includes(arr[i])) {
      count++
    }
  }

  return count;
}

console.log(duplicateCharacterCount("aloha", "hei"));
console.log(duplicateCharacterCount("jambo", "bonjour"));
console.log(duplicateCharacterCount("hello", "hola"));
console.log(duplicateCharacterCount("ola", "hej"));
console.log(duplicateCharacterCount("ciao", "konnichiwa"));
console.log(duplicateCharacterCount("merhaba", "xin chao"));
console.log(duplicateCharacterCount("hello world", "hello to everyone around the world"));
