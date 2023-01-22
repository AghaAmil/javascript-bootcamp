// arrays.
var breakfast = new Array("Cinnamon Doughnuts", "Waffles", "Granola", "Chorizo Burrito", "French Toast");
console.log(breakfast);

breakfast[2] = "Fluffy Pancakes";
console.log("The index 2 is entered and the breakfast item is going to be changed");
console.log(breakfast);

// making arrays
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JavaScript";

console.log(courses);

var course1 = new Array();
course1[0] = "HTML";
course1[1] = "CSS";
course1[2] = "JS";
course1[3] = "Angular";
course1[4] = "React";

console.log(course1);

// array literals
var course2 = ["Math", "Science", "Geometry", "English", "Algebra"];

console.log(course2);
console.log(course2[3]);

course2[3] = "Arabic Studies";

console.log(course2);

// the length property
console.log("The length of the courses array is: " + course2.length);

// concat method
var fullCourse = course2.concat(courses);
console.log(fullCourse);
console.log(fullCourse.length);

//associative arrays
var personalInfo = [];
personalInfo["name"] = "Amirhossein";
personalInfo["age"] = 29;
personalInfo["location"] = "Berlin";

console.log(personalInfo);
console.log("Saved location in user's personal info object is: " + personalInfo["location"]);

// the math object
console.log("\n");
console.log("The MATH Object");

console.log(Math.PI);
console.log(Math.E);
console.log("The square root of 342.4 is: " + Math.sqrt(342.4).toFixed(2));
console.log(Math.ceil(Math.random() * 10));

var year = 1993;
document.getElementById("sp1").innerHTML = Math.ceil(year / 100);

// calculation using prompt & alert
// var input = prompt("Enter a number: ");
// var answer = Math.sqrt(input);

// alert("The square root of " + input + " is : " + answer.toFixed(2));

// setInternal
var minInSeconds = 60;

function counter() {
  minInSeconds -= 1;
  document.getElementById("sp2").innerHTML = minInSeconds;

  if (minInSeconds == 0) {
    clearInterval(timer1);
    document.getElementById("sp2").innerHTML = "Time's Up!";
  }
}

var timer1 = setInterval(counter, 1000);

// date()
document.getElementById("sp3").innerHTML = new Date();
document.getElementById("sp4").innerHTML = new Date(86400000);
document.getElementById("sp5").innerHTML = new Date("January 2, 2015 10:42:00");
document.getElementById("sp6").innerHTML = new Date(88, 5, 11, 11, 42, 0, 0);

// date() methods
console.log("\n");
console.log("Date object & methods...");

console.log("Current time (Only fullyear is displayed): " + new Date().getFullYear());
console.log("Current time (Only month is displayed): " + new Date().getMonth());
console.log("Current time (Only hour is displayed): " + new Date().getHours());
console.log("Current time (Only mintue is displayed): " + new Date().getMinutes());

// digital clock

function digitalClock() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  document.getElementById("sp7").innerHTML = hour + ":" + min + ":" + sec;
}

var timer2 = setInterval(digitalClock, 1000);

// example
function getWeekDay(year, month, day) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d1 = new Date(year, month, day);

  return names[d1.getDay()];
}

document.getElementById("sp8").innerHTML = getWeekDay(1993, 7, 24);
