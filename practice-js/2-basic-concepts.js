console.log(`1. Arithmetic Operations`);

// addition
let x = 10.34;
let y = 23.984;
let sum = y - x + 65.1 - 21 + 0.23;

document.getElementById("sp1").innerHTML = sum;

// calculation using eval()
console.log(`Below calculation is done using eval(10 * 20 + 978)`);
console.log(eval(`10 * 20 + 978`));

// multiplication
let z = 3;
let sum1 = 2 * y - z * x;

document.getElementById("sp2").innerHTML = sum1;
document.getElementById("sp3").innerHTML = sum1.toFixed(2);

document.getElementById("sp4").innerHTML = 10 * `5`;
document.getElementById("sp5").innerHTML = `10` * `5`;
document.getElementById("sp6").innerHTML = `sololearn` * 5;

// division
document.getElementById("sp7").innerHTML = (y / x / z).toFixed(4);
document.getElementById("sp8").innerHTML = x / 0;

// modulus
document.getElementById("sp9").innerHTML = 26 % 6;
document.getElementById("sp10").innerHTML = (y % x).toFixed(3);

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);

// Increment & Decrement
let a = 0;
let b = 10;
a = b++;

document.getElementById("sp11").innerHTML = a;
document.getElementById("sp12").innerHTML = b;

a = 0;
b = 10;
a = ++b;

document.getElementById("sp13").innerHTML = a;
document.getElementById("sp14").innerHTML = b;

a = 0;
b = 10;
a = b--;

document.getElementById("sp15").innerHTML = a;
document.getElementById("sp16").innerHTML = b;

a = 0;
b = 10;
a = --b;

document.getElementById("sp17").innerHTML = a;
document.getElementById("sp18").innerHTML = b;

console.log(`\n`);
console.log(`2. Assignment Operators`);

// assignment operators
document.getElementById("sp19").innerHTML = x += y;
document.getElementById("sp20").innerHTML = z *= y;

// Reassigning values to our variables;
x = 10.34;
y = 23.984;
z = 3;

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);
document.getElementById("sp21").innerHTML = (x -= y += 9).toFixed(3);

console.log(`\n`);
console.log(`3. Comparison Operators`);

num1 = 10;
document.getElementById("sp22").innerHTML = num1 == `10`;
document.getElementById("sp23").innerHTML = num1 == 10.1;
document.getElementById("sp24").innerHTML = num1 == 10;

document.getElementById("sp25").innerHTML = num1 === `10`;
document.getElementById("sp26").innerHTML = num1 === 10.1;
document.getElementById("sp27").innerHTML = num1 === 10;

document.getElementById("sp28").innerHTML = num1 != `10`;
document.getElementById("sp29").innerHTML = num1 != 10.1;
document.getElementById("sp30").innerHTML = num1 != 10;

document.getElementById("sp31").innerHTML = num1 !== `10`;
document.getElementById("sp32").innerHTML = num1 !== 10.1;
document.getElementById("sp33").innerHTML = num1 !== 10;

document.getElementById("sp34").innerHTML = num1 > 10.1;
document.getElementById("sp35").innerHTML = num1 > 10;
document.getElementById("sp36").innerHTML = num1 < 23;

document.getElementById("sp37").innerHTML = num1 >= 10.1;
document.getElementById("sp38").innerHTML = num1 <= 10;
document.getElementById("sp39").innerHTML = num1 >= 23;

// logical operators
document.getElementById("sp40").innerHTML = 4 > 2 && 10 < 15;
document.getElementById("sp41").innerHTML = !(4.3 > 4.6 || 49 >= 49);

let userAge = 16;
let userAge1 = 31;
document.getElementById("sp42").innerHTML = userAge < 18 ? `Too Young` : `Old Enough`;
document.getElementById("sp43").innerHTML = userAge1 < 18 ? `Too Young` : `Old Enough`;

let hour1 = 12;
let hour2 = 20;
let hour3 = 0;
document.getElementById("sp44").innerHTML = 0 <= hour1 && hour1 <= 12 ? `AM` : `PM`;
document.getElementById("sp45").innerHTML = 0 <= hour2 && hour2 <= 12 ? `AM` : `PM`;
document.getElementById("sp46").innerHTML = 0 <= hour3 && hour3 <= 12 ? `AM` : `PM`;
