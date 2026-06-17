function britishToAmerican(sentence) {
  let dict = {
    colour:	"color",
    flavour: "flavor",
    honour: "honor",
    neighbour: "neighbor",
    labour: "labor",
    humour: "humor",
    centre: "center",
    fibre: "fiber",
    defence: "defense",
    offence: "offense",
    organise: "organize",
    recognise: "recognize",
    analyse: "analyze"
  }

  const regex = new RegExp(Object.keys(dict).join("|"), "gi");

  return sentence.replace(regex, match => dict[match].toLowerCase());

}

console.log(britishToAmerican("I love the colour blue."));
console.log(britishToAmerican("The fibre optic cable is new."));
console.log(britishToAmerican("It's an honour to meet someone with such humour."));
console.log(britishToAmerican("The unrecognised artist analysed his colour palette at the centre."));
console.log(britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful."));
