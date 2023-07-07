console.log('1. First Lesson');
console.log('Hello World!');
console.log('\n');

console.log('2. Output');
document.getElementById('p1').innerHTML = 'This paragraph supposed to be generated with document.write() property. But to make things beautiful and some technical problems, I\'ve produced it using JS DOM.';
console.log('\n');

console.log('3. Variables');
let x = 100;
console.log(`X = ${x}`);
console.log('The value of the can be change throughout the code.');
x = 200;
console.log(`X is now ${x}`);
console.log('\n');

console.log('4. DataTypes');
console.log(`X can be another number as well.`);
x = 23.84;
console.log(`X = ${x}`);
console.log('This is a string inside a "quotation"');
console.log("This is a string inside a 'quotation'");
let varbool1 = true;
let varbool2 = false;
console.log(varbool1);
console.log(varbool2);

