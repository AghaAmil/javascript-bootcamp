// introducing object
const person = {
  name: "Amir",
  surname: "Moravveji",
  age: 29,
  height: 169,
};

console.log(person);

console.log(`The first property is name: ${person.name}`);
console.log(`The second property is surname: ${person["surname"]}`);
console.log(`The third property is age: ${person.age}`);
console.log(`The last property is height: ${person["height"]}`);
console.log(`The number of surname's characters are:  ${person["surname"].length}`);
console.log(`The number of name's characters are: ${person["name"].length}`);

// calculate cuboid volume
const cuboid = {
  length: 10,
  height: 13,
  width: 7,
};

let vol = cuboid.length * cuboid.height * cuboid.width;
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

let student1 = new studentProfile("Amirhossein", "Moravveji", 7868, "Computer Engineering");
console.log(student1);

let student2 = new studentProfile("Ali", "Behnam", 3345, "Civil Engineering");
console.log(student2);

console.log(`Student1 ID is:  ${student1.studentId}`);
console.log(`Student1 Major is; ${student1["major"]}`);
console.log(`Student2 complete name is: ${student2.fname} ${student2["lname"]}`);

// Flight managment object
function flightScheduler(flightNumber, flightStatus) {
  this.flightNumber = flightNumber;
  this.flightStatus = flightStatus;
}

let flight1 = new flightScheduler("NGT 929", "landed");
document.getElementById("sp2").innerHTML = `Flight ${flight1.flightNumber} has ${flight1.flightStatus}`;

// methods
console.log("\n");
console.log("3. Methods");

function deviceInfo(deviceName, deviceId, deviceType, deviceCreatedDate) {
  this.dName = deviceName;
  this.dId = deviceId;
  this.dType = deviceType;
  this.dCreated = deviceCreatedDate;
  this.dAge = ageCal;
  this.changeId = function (id) {
    this.dId = id;
  };
}

function ageCal() {
  return 2022 - this.dCreated;
}

let device1 = new deviceInfo("Apple Watch", "15#001", "Wearable", 2011);

console.log(device1);
console.log(device1.dCreated);

device1.changeId("15#1#001");

console.log(device1);
console.log(`The new device is ${device1.dId}`);
console.log(device1.dAge());

// store manager
function storeManager(productId, price) {
  this.product = productId;
  this.price = price;
  this.dicountPrice = function (discount) {
    this.price = price -= (price * discount) / 100;
  };
}

let prod1 = new storeManager("LD1493", 1700);

document.getElementById("sp3").innerHTML = `${prod1.product} price: ${prod1["price"]}`;

let discount = 17;
prod1.dicountPrice(discount);

document.getElementById("sp4").innerHTML = `${prod1.product} discounted price: ${prod1["price"]}`;

// contract manager

function contractMang(contractName, ContractNumber) {
  this.cName = contractName;
  this.cNumber = ContractNumber;
  this.print = function () {
    console.log(`${this.cName} : ${this.cNumber}`);
  };
}

contract1 = new contractMang("David-Contractor", "FD-345");
console.log(contract1);
contract1.print();
