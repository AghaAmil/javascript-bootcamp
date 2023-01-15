// introducing object
var person = {
  name: "Amir",
  surname: "Moravveji",
  age: 29,
  height: 169,
};

console.log(person);

console.log("The first property is name: " + person.name);
console.log("The second property is surname: " + person["surname"]);
console.log("The third property is age: " + person.age);
console.log("The last property is height: " + person["height"]);
console.log("The number of surname's characters are : " + person["surname"].length);
console.log("The number of name's characters are : " + person["name"].length);

// calculate cuboid volume
var cuboid = {
  length: 10,
  height: 13,
  width: 7,
};

var vol = cuboid.length * cuboid.height * cuboid.width;
document.getElementById("sp1").innerHTML = vol;
