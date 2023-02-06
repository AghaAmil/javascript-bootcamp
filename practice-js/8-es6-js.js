// the differences between let & var
function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log("var x inside the if statement: " + x);
  }
  console.log("var x ouside the if statement: " + x);
}

function testLet() {
  let y = 1;
  if (true) {
    let y = 2;
    console.log("let y inside the if statement: " + y);
  }
  console.log("let y inside the if statement: " + y);
}

testVar();
testLet();

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
