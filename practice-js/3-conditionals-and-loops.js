// the if statement
const month1 = "september";
const month2 = "august";
const month3 = "july";

if (month1 == "august") document.getElementById("sp1").innerHTML = `Vacation`;

if (month2 == "august") document.getElementById("sp2").innerHTML = `Vacation`;

if (month3 == "august") document.getElementById("sp3").innerHTML = `Vacation`;

// the else statement
const record1 = 2.49;
const record2 = 1.34;
const record3 = 5.3;

if (record1 > 2.45) {
  document.getElementById("sp4").innerHTML = `new records`;
} else {
  document.getElementById("sp4").innerHTML = `not this time`;
}

if (record2 > 2.45) {
  document.getElementById("sp5").innerHTML = `new records`;
} else {
  document.getElementById("sp5").innerHTML = `not this time`;
}

if (record3 > 2.45) {
  document.getElementById("sp6").innerHTML = `new records`;
} else {
  document.getElementById("sp6").innerHTML = `not this time`;
}

// the else if statement
const id1 = 1;
const id2 = 2;
const id3 = 3;
const id4 = 4;

if (id1 === 1) {
  document.getElementById("sp7").innerHTML = `The HTML Course`;
} else if (id1 === 2) {
  document.getElementById("sp7").innerHTML = "The CSS Course";
} else if (id1 === 3) {
  document.getElementById("sp7").innerHTML = `The JavaScript Course`;
} else {
  document.getElementById("sp7").innerHTML = `Invalid Course ID`;
}

if (id2 === 1) {
  document.getElementById("sp8").innerHTML = `The HTML Course`;
} else if (id2 === 2) {
  document.getElementById("sp8").innerHTML = `The CSS Course`;
} else if (id2 === 3) {
  document.getElementById("sp8").innerHTML = `The JavaScript Course`;
} else {
  document.getElementById("sp8").innerHTML = `Invalid Course ID`;
}

if (id3 === 1) {
  document.getElementById("sp9").innerHTML = `The HTML Course`;
} else if (id3 === 2) {
  document.getElementById("sp9").innerHTML = `The CSS Course`;
} else if (id3 === 3) {
  document.getElementById("sp9").innerHTML = `The JavaScript Course`;
} else {
  document.getElementById("sp9").innerHTML = `Invalid Course ID`;
}

if (id4 === 1) {
  document.getElementById("sp10").innerHTML = `The HTML Course`;
} else if (id4 === 2) {
  document.getElementById("sp10").innerHTML = `The CSS Course`;
} else if (id4 === 3) {
  document.getElementById("sp10").innerHTML = `The JavaScript Course`;
} else {
  document.getElementById("sp10").innerHTML = `Invalid Course ID`;
}

// The swith statement
const themeId = 4;

switch (themeId) {
  case 1:
    document.getElementById("sp11").innerHTML = `Light Theme`;
    break;
  case 2:
    document.getElementById("sp11").innerHTML = `Dark Theme`;
    break;
  case 3:
    document.getElementById("sp11").innerHTML = `Nocturne Theme`;
    break;
  case 4:
    document.getElementById("sp11").innerHTML = `Terminal Theme`;
    break;
  case 5:
    document.getElementById("sp11").innerHTML = `Terminal Theme`;
    break;
}

const favColor = "yellow";

switch (favColor) {
  case "blue":
    document.getElementById("sp12").innerHTML = `Your Selected Color Is Blue`;
    break;
  case "green":
    document.getElementById("sp12").innerHTML = `Your Selected Color Is Green`;
    break;
  case "grey":
    document.getElementById("sp12").innerHTML = `Your Selected Color Is Grey`;
    break;
  case "red":
    document.getElementById("sp12").innerHTML = `Your Selected Color Is Red`;
    break;
  default:
    document.getElementById("sp12").innerHTML = `Your Selected Color Does Not Exist`;
    break;
}

// for loops
let loopResult = [];
for (i = 0; i <= 10; i++) {
  loopResult.push(i);
}

console.log(loopResult);
document.getElementById("p1").innerHTML = loopResult;

// while loops
let loopResult1 = [];
let i1 = 0;

while (i1 <= 10) {
  loopResult1.push(i1);
  i1++;
}

console.log(loopResult1);
document.getElementById("p2").innerHTML = loopResult1;

// do while loop
let loopResult2 = [];
let j = 23;
do {
  loopResult2.push(j);
  j++;
} while (j <= 30);

console.log(loopResult2);
document.getElementById("p3").innerHTML = loopResult2;

// example
// input 1
let distance = 31;
let snaileMovement = 0;
let day = 0;

while (snaileMovement < distance) {
  snaileMovement += 7;
  day++;
  if (snaileMovement >= distance) break;
  snaileMovement -= 2;
}

document.getElementById("sp13").innerHTML = day;

// input 2
distance = 42;
snaileMovement = 0;
day = 0;

while (snaileMovement < distance) {
  snaileMovement += 7;
  day++;
  if (snaileMovement >= distance) break;
  snaileMovement -= 2;
}

document.getElementById("sp14").innerHTML = day;

// input 3
distance = 128;
snaileMovement = 0;
day = 0;

while (snaileMovement < distance) {
  snaileMovement += 7;
  day++;
  if (snaileMovement >= distance) break;
  snaileMovement -= 2;
}

document.getElementById("sp15").innerHTML = day;
