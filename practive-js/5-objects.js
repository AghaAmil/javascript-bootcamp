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

// object constructor
console.log("\n");
console.log("2. Object Constructor Fucntion");

function studentProfile(name, surname, id, major) {
  this.fname = name;
  this.lname = surname;
  this.studentId = id;
  this.major = major;
}

var student1 = new studentProfile("Amirhossein", "Moravveji", 7868, "Computer Engineering");
console.log(student1);

var student2 = new studentProfile("Ali", "Behnam", 3345, "Civil Engineering");
console.log(student2);

console.log("Student1 ID is: " + student1.studentId);
console.log("Student1 Major is: " + student1["major"]);
console.log("Student2 complete name is: " + student2.fname + " " + student2["lname"]);

// Flight managment object
function flightScheduler(flightNumber, flightStatus) {
  this.flightNumber = flightNumber;
  this.flightStatus = flightStatus;
}

var flight1 = new flightScheduler("NGT 929", "landed");
document.getElementById("sp2").innerHTML =
  "Flight " + flight1.flightNumber + " has " + flight1.flightStatus;
