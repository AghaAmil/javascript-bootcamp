// first lesson
console.log(`1. First Lesson`);
console.log(`Fresh start to learn JavaScript`);

// output
document.getElementById(
  "p1"
).innerHTML = `This paragraph supposed to be generated with document.write() property. But to make things beautiful and some technical problems, I've produced it using JS DOM.`;

// variables
console.log(`\n`);
console.log(`3. Variables`);

let x = 100;
console.log(`X = ${x}`);

console.log(`The value of x can be changed through your code`);
x = 101;
console.log(`X = ${x}`);

// multiline comments
/* var x = 100;
console.log("X = " + x);

console.log("The value of x can be changed through your code");
x = 101;
console.log("X = " + x); */

// date types
console.log(`\n`);
console.log(`5. Variables`);

console.log(`X can be another number again`);
x = 34.1;
console.log(`X = ${x}`);

let str = `This is an string`;
console.log(str);

let str1 = `This is an another string iside a 'quotation'`;
console.log(str1);

let str2 = `This is an another string iside a "quotation"`;
console.log(str2);

let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(bool2);
