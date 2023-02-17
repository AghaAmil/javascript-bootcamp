console.log("1. ES6 Variables & Strings");

// the differences between let & var
const testVar = () => {
    var x = 1;
    if (true) {
        var x = 2;
        console.log("var x inside the if statement: " + x);
    }
    console.log("var x outside the if statement: " + x);
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
console.log("2. Loop & Functions in ES6");

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
    f: 6,
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
let container5 = "";

for (let argument of arr2) {
    container5 += `${argument}, `;
}

console.log(container5);

// iteration over characters of a string
let container6 = "";

for (let char of "Hello World!") {
    container6 += char;
}

console.log(container6);

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

add1(61, 50);

// simple function with one argument
const sayHi = (x) => `Say hi to another world, ${x}!`;
console.log(sayHi("Amir"));

// foreach
arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let container7 = "";

arr3.forEach((element) => {
    container7 += `${element * 2} `;
});

console.log(container7);

// the object used in this sample is changed by es6
let height = 190;
let weight = "90 KG";

let athlete = {
    height,
    weight,
};

console.log(athlete["weight"]);
console.log(athlete.height);

console.log("\n");
console.log("3. ES6 Objects");

// method definition shorthand in es6

let tree = {
    height: 100,
    weight: 200000,
    type: "tree-type",
    grow() {
        this.height += 2;
        this.weight += 2000;
    },
};

console.log(`Tree's height is ${tree["height"]}`);
console.log(`Tree's weight is ${tree["weight"]}`);

tree.grow();

console.log(`Tree's height after growing is ${tree.height}`);
console.log(`Tree's weight after growing is ${tree.weight}`);

// computed property names
let prop = "name";
let id = 7868;
let mobile = "+989123117711";

let user = {
    [prop]: "Amir",
    [`user_${id}`]: `${mobile}`,
};

console.log(user);
console.log(user[`user_${id}`]);

// another example
let i = 0;

const object = {
    [`foo${i++}`]: i,
    [`foo${i++}`]: i,
    [`foo${i++}`]: i,
};

console.log(object);

// another example
let param = "size";

const object1 = {
    [param]: 12,
    [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(object1.mobileSize);

// object assign

let person1 = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};

let student1 = {
    name: 'Bob',
    age: 20,
    xp: '2 years'
};

let newStudent = Object.assign({}, person1, student1);
console.log(newStudent);

let newStudent2 = Object.assign({}, student1, person1);
console.log(newStudent2);

// avoid mutations when creating a new object
let newPerson = Object.assign({}, person1);

console.log(newPerson);
console.log(newPerson.sex);
console.log(person1.sex);

// assigning a value to an object property
let newPerson2 = Object.assign({}, person1, {name: 'Amir'});
console.log(newPerson2);

// example
let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

console.log("\n");
console.log("4. Array Destructuring in ES6");

// array destructuring in es6
let arr4 = ['1', '2', '3'];
let [one, two, three] = arr4;

console.log(one);
console.log(two);
console.log(three);

// array destructuring on functions
let func = () => {
    return [5, 7, 6];
};

let [five, , six] = func();

console.log(five);
console.log(six);

// assignment and swapping values
let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4

// object destructuring
let obj2 = {
    h: 100,
    s: true,
};

let {h, s} = obj2;

console.log(h);
console.log(s);

// We can assign without declaration, but there are some syntax requirements
let var1, var2;
({var1, var2} = {var1: 'Hello ', var2: 'AghaAmil'});

console.log(var1 + var2);

// another sample
let {val1, val2} = {val1: 'Learning ', val2: 'Javascript'};
console.log(val1 + val2);

let obj3 = {
    h: 42,
    s: 'true',
};

let {h: foo, s: bar} = obj3;
console.log(foo);

let obj4 = {
    uuid: 42,
    name: "Amir"
};

let {uuid = 10, age = 20} = obj4;
console.log(uuid);
console.log(age);

console.log("\n");
console.log("5. Rest & Spread");

// old function prior to es6
function checkArrContent(arr) {
    for (let i = 1; i < arguments.length; i++) {
        let num = arguments[i];
        // console.log(arr);
        // console.log(num);
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let array = [2, 4, 6, 7];

console.log(checkArrContent(array, 6, 6, 9));
console.log(checkArrContent(array, 2, 4, 7, 6));
console.log(checkArrContent(array, 2));

// using above function with es6 standards
const containsAll = (arr, ...nums) => {
    for (let i of nums) {
        if (arr.indexOf(i) === -1) {
            return false;
        }
    }
    return true;
}

let array1 = [5, 1, 98, 3];

console.log("Using new method in es6:");
console.log(containsAll(array1, 4, 5, 1, 5, 3));
console.log(containsAll(array1, 5, 3, 98));

// calculate numbers inside the array
const arrCalculator = (...input) => {
    let sum = 0;
    for (let arg of input) {
        sum += arg;
    }
    return sum;
}

console.log('[1, 3, 4, 5, 1, 4, 5, 76, 4]');
console.log(`The sum of above input is: ${arrCalculator(1, 3, 4, 5, 1, 4, 5, 76, 4)}`);

// spread in function calls
const func1 = (w, x, y, z) => {
    console.log(w + x + y + z);
}

let array2 = [1, 2, 3];
func1(...array2, 4);

// spread in array literals
let array3 = ["one", "two", "Five"];
array3.splice(2, 0, "Three");
array3.splice(3, 0, "Four");

console.log(array3);

// new method in es6
let array4 = ['Four', 'Five'];
let newArray = ['One', 'Two', 'Three', ...array4];

console.log(newArray);

// spread in object literals
const obj5 = {
    name: 'Amirhossein',
    age: 29
};
const obj6 = {
    name: 'Ali',
    year: 1992
};

const cloneObj = {...obj5};
const mergeObj = {...obj5, ...obj6};

console.log(cloneObj);
console.log(mergeObj);

