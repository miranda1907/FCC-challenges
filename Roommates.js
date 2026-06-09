function getRoommates(people) {
  const result = [];
  const obj = {}

  for (let i = 0; i < people.length; i++) {
    const group = people[i].group;
    const name = people[i].name;

    if (!obj[group]) {
      obj[group] = [name];
    } else {
      obj[group].push(name);
    }
  }

  for (let key in obj) {
    const group = obj[key];

    if (group.length > 2) {
      for (let i = 0; i < group.length ; i+=2) {
        
        result.push(group.slice(i, i+2).length === 2? group.slice(i, i+2).join(" and ") : group.slice(i)[0])
      } 
              
    } else if (group.length === 2) {
      result.push(group.join(" and "));      
    } else {
      result.push(group[0]);
    }
  }
  return result;
}

console.log(getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]));
console.log(getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]));
console.log(getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]));
console.log(getRoommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]));
console.log(getRoommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]));
