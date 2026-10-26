function format(seconds) {
  let formattedString = "";

  const minutes = Math.floor(seconds / 60)
  console.log(minutes);
  const hours = Math.floor(minutes / 60);
  console.log(hours)
  let remainingSeconds = seconds % 60;
  console.log(remainingSeconds)
  let remainingMinutes = minutes % 60
  console.log(remainingMinutes)

  if (minutes >= 60) {
      remainingMinutes = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes
      formattedString = `${hours}:${remainingMinutes}:${remainingSeconds}`

  } else {
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    formattedString = `${minutes}:${remainingSeconds}`
  }

  return formattedString;
}

console.log(format(500))
console.log(format(4000))
console.log(format(1))
console.log(format(5555))
console.log(format(99999))
