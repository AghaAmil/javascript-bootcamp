console.log("1. Arithmetic Operations");

// addition
var x = 10.34;
var y = 23.984;
var sum = y - x + 65.1 - 21 + 0.23;

document.getElementById("sp1").innerHTML = sum;

// calculation using eval()
console.log("Below calculation is done using eval(10 * 20 + 978)");
console.log(eval("10 * 20 + 978"));

// multiplication
var z = 3;
var sum1 = 2 * y - z * x;

document.getElementById("sp2").innerHTML = sum1;
document.getElementById("sp3").innerHTML = sum1.toFixed(2);

document.getElementById("sp4").innerHTML = 10 * "5";
document.getElementById("sp5").innerHTML = "10" * "5";
document.getElementById("sp6").innerHTML = "sololearn" * 5;

// division
document.getElementById("sp7").innerHTML = (y / x / z).toFixed(4);
document.getElementById("sp8").innerHTML = x / 0;

// modulus
document.getElementById("sp9").innerHTML = 26 % 6;
document.getElementById("sp10").innerHTML = (y % x).toFixed(3);

console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);

// Increment & Decrement
var a = 0,
  b = 10;
a = b++;

document.getElementById("sp11").innerHTML = a;
document.getElementById("sp12").innerHTML = b;

var a = 0,
  b = 10;
a = ++b;

document.getElementById("sp13").innerHTML = a;
document.getElementById("sp14").innerHTML = b;

var a = 0,
  b = 10;
a = b--;

document.getElementById("sp15").innerHTML = a;
document.getElementById("sp16").innerHTML = b;

var a = 0,
  b = 10;
a = --b;

document.getElementById("sp17").innerHTML = a;
document.getElementById("sp18").innerHTML = b;

console.log("\n");
console.log("2. Assignment Operators");

// assignment operators
document.getElementById("sp19").innerHTML = x += y;
document.getElementById("sp20").innerHTML = z *= y;

// Reassigning values to our variables;
var x = 10.34;
var y = 23.984;
var z = 3;

console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
document.getElementById("sp21").innerHTML = (x -= y += 9).toFixed(3);

console.log("\n");
console.log("3. Comparison Operators");

var num1 = 10;
document.getElementById("sp22").innerHTML = num1 == "10";
document.getElementById("sp23").innerHTML = num1 == 10.1;
document.getElementById("sp24").innerHTML = num1 == 10;

document.getElementById("sp25").innerHTML = num1 === "10";
document.getElementById("sp26").innerHTML = num1 === 10.1;
document.getElementById("sp27").innerHTML = num1 === 10;

document.getElementById("sp28").innerHTML = num1 != "10";
document.getElementById("sp29").innerHTML = num1 != 10.1;
document.getElementById("sp30").innerHTML = num1 != 10;

document.getElementById("sp31").innerHTML = num1 !== "10";
document.getElementById("sp32").innerHTML = num1 !== 10.1;
document.getElementById("sp33").innerHTML = num1 !== 10;

document.getElementById("sp34").innerHTML = num1 > 10.1;
document.getElementById("sp35").innerHTML = num1 > 10;
document.getElementById("sp36").innerHTML = num1 < 23;

document.getElementById("sp37").innerHTML = num1 >= 10.1;
document.getElementById("sp38").innerHTML = num1 <= 10;
document.getElementById("sp39").innerHTML = num1 >= 23;
