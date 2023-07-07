console.log('1. Math Operations Summaries');
let x = 10.34;
let y = 84.58;
let sum = y - x + 43.4 - 21 + 0.35;
console.log(`y - x + 43.4 - 21 + 0.35 = ${sum}`);

console.log('Let\'s try sth strange and see the result');
console.log('(10 * \'5\') = ' + (10 * '5'));
console.log('(\'10\' * \'5\') = ' + ('10' * '5'));
console.log('(\'sololearn\' * 5) = ' + ('sololearn' * 5));
console.log('\n');

console.log('2.Increment and Decrement');
console.log('We have two numbers:');
let a = 0;
let b = 10;
console.log('Number a = 0');
console.log('Number b = 10');
console.log('The increment ++ operator');
a = b++;
console.log('a = b++');
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log('a = ++b');
a = 0;
b = 10;
a = ++b;
console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log('The increment -- operator');
a = 0;
b = 10;
a = b--;
console.log('a = b--');
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log('a = --b');
a = 0;
b = 10;
a = --b;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log('\n');

console.log('2. Assignment Operators');
let x1 = 53;
let y1 = 82;
let z1 = 1.45;

console.log(`X = ${x1}`);
console.log(`Y = ${y1}`);
console.log(`Z = ${z1}`);

console.log(`(X += Y) = (X = X + Y) = ${x1 += y1}`);
console.log(`X = ${x1}`);
console.log(`(z *= y) = (z = z * y) = ${(z1 *= y1).toFixed(2)}`);
console.log(`Z = ${z1.toFixed(2)}`);
console.log('\n');

console.log('3. Comparison Operators');
let sampleNum = 10;
console.log(sampleNum);

if (sampleNum == 10) {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum == '10') {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum == '10.1') {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum != 10) {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum !== 10) {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum !== 12) {
    console.log('true');
} else {
    console.log('false');
}

if (sampleNum === 12) {
    console.log('true');
} else {
    console.log('false');
}

if ((4 > 2) && (10 < 15)) {
    console.log('true');
} else {
    console.log('false');
}

if (!((4.3 > 4.6) || (49 >= 49))) {
    console.log('true');
} else {
    console.log('false');
}

let userAge1 = 16;
let userAge2 = 34;
(userAge1 > 18) ? console.log('User is old!') : console.log('User is young');
(userAge2 > 18) ? console.log('User is old!') : console.log('User is young');

let time1 = 12;
let time2 = 20;
let time3 = 0;

if ((time1 >= 0) && (time1 <= 12)) {
    console.log('AM');
} else {
    console.log('PM');
}

if ((time2 >= 0) && (time2 <= 12)) {
    console.log('AM');
} else {
    console.log('PM');
}

if ((time3 >= 0) && (time3 <= 12)) {
    console.log('AM');
} else {
    console.log('PM');
}
