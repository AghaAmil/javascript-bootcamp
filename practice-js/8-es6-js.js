// the differences between let & var
const testVar = () => {
  var x = 1;
  if (true) {
    var x = 2;
    console.log("var x inside the if statement: " + x);
  }
  console.log("var x ouside the if statement: " + x);
};

const testLet = () => {
  let y = 1;
  if (true) {
    let y = 2;
    console.log("let y inside the if statement: " + y);
  }
  console.log("let y inside the if statement: " + y);
};

testVar();
testLet();

console.log("\n");

// declaring a variable using let inside a loop
let container = "";
for (let i = 1; i < 11; i++) {
  container += `${i} `;
}
console.log(container);

let container2 = "";
for (let i = 10; i > 0; i--) {
  container2 += `${i} `;
}
console.log(container2);

console.log("\n");

// template literals
let name = "Amirhossein Moravveji";
console.log(name);
console.log(`You are the best ${name}`);

// another sample
let num1 = 10;
let num2 = 23.5;

console.log(num1);
console.log(num2);
console.log(`The sum of num1 & num2 is: ${num1 + num2}`);

// old for loop
let container3 = "";
let arr1 = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr1.length; i++) {
  container3 += `${arr1[i]} `;
}
console.log(container3);

// for...in loop iteration over objects
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  d: 6,
};

for (let property in obj1) {
  console.log(`${property}: ${obj1[property]}`);
}

const person = {
  name: "Amir",
  surname: "Moravveji",
  age: 29,
  height: 169,
};

let container4 = "";

for (let property in person) {
  container4 += `${person[property]} `;
}

console.log(container4);

// for...of loop iteration over iterable objects
let arr2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let contianer5 = "";

for (let argument of arr2) {
  contianer5 += `${argument}, `;
}

console.log(contianer5);

// iteration over charactors of an string
let contianer6 = "";

for (let char of "Hello World!") {
  contianer6 += char;
}

console.log(contianer6);

// passed students example
let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63, 56, 91, 56, 56, 70, 93, 65, 64, 35, 68, 76, 91];
let passedStudents = 0;

for (let argument of scores) {
  if (argument >= 70) {
    passedStudents++;
  }
}

document.getElementById("sp1").innerHTML = `${passedStudents} students are passed`;

// new function method
function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(10, 20);

// the same function using es6
const add1 = (x, y) => {
  let sum = x + y;
  console.log(sum);
};

add(61, 50);

// simple function with one argument
const sayHi = (x) => `Say hi to another world, ${x}!`;
console.log(sayHi("Amir"));

// foreach
arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let contianer7 = "";

arr3.forEach((element) => {
  contianer7 += `${element * 2} `;
});

console.log(contianer7);
