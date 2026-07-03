function getMood(genre, bpm) {

  let mood = "";

  switch(genre) {
    case "classical":
    bpm >= 60 && bpm <= 109 ? mood = "focus" : mood = "happy";
    break;

    case "electronic":
    if (bpm <= 89) {
      mood = "focus";
    } else if (bpm <=134) {
      mood = "happy";
    } else if (bpm >= 135) {
      mood = "hype"
    }
    break;

    case "pop":
    if (bpm >= 60 && bpm <= 180) mood = "happy";
    break;

    case "rock":
    bpm >= 60 && bpm <= 129 ? mood = "happy" : mood = "hype";
    break;
  }

  return mood;
}

console.log(getMood("rock", 111));
console.log(getMood("electronic", 74));
console.log(getMood("classical", 180));
console.log(getMood("rock", 155));
console.log(getMood("electronic", 90));
console.log(getMood("classical", 67));
console.log(getMood("pop", 100));
console.log(getMood("electronic", 135));
