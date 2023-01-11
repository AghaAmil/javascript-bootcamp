// the if statement
var month1 = "september";
var month2 = "august";
var month3 = "july";

if (month1 == "august") document.getElementById("sp1").innerHTML = "Vacation";

if (month2 == "august") document.getElementById("sp2").innerHTML = "Vacation";

if (month3 == "august") document.getElementById("sp3").innerHTML = "Vacation";

// the else statement
var record1 = 2.49;
var record2 = 1.34;
var record3 = 5.3;

if (record1 > 2.45) {
  document.getElementById("sp4").innerHTML = "new records";
} else {
  document.getElementById("sp4").innerHTML = "not this time";
}

if (record2 > 2.45) {
  document.getElementById("sp5").innerHTML = "new records";
} else {
  document.getElementById("sp5").innerHTML = "not this time";
}

if (record3 > 2.45) {
  document.getElementById("sp6").innerHTML = "new records";
} else {
  document.getElementById("sp6").innerHTML = "not this time";
}

// the else if statement
var id1 = 1;
var id2 = 2;
var id3 = 3;
var id4 = 4;

if (id1 === 1) {
  document.getElementById("sp7").innerHTML = "The HTML Course";
} else if (id1 === 2) {
  document.getElementById("sp7").innerHTML = "The CSS Course";
} else if (id1 === 3) {
  document.getElementById("sp7").innerHTML = "The JavaScript Course";
} else {
  document.getElementById("sp7").innerHTML = "Invalid Course ID";
}

if (id2 === 1) {
  document.getElementById("sp8").innerHTML = "The HTML Course";
} else if (id2 === 2) {
  document.getElementById("sp8").innerHTML = "The CSS Course";
} else if (id2 === 3) {
  document.getElementById("sp8").innerHTML = "The JavaScript Course";
} else {
  document.getElementById("sp8").innerHTML = "Invalid Course ID";
}

if (id3 === 1) {
  document.getElementById("sp9").innerHTML = "The HTML Course";
} else if (id3 === 2) {
  document.getElementById("sp9").innerHTML = "The CSS Course";
} else if (id3 === 3) {
  document.getElementById("sp9").innerHTML = "The JavaScript Course";
} else {
  document.getElementById("sp9").innerHTML = "Invalid Course ID";
}

if (id4 === 1) {
  document.getElementById("sp10").innerHTML = "The HTML Course";
} else if (id4 === 2) {
  document.getElementById("sp10").innerHTML = "The CSS Course";
} else if (id4 === 3) {
  document.getElementById("sp10").innerHTML = "The JavaScript Course";
} else {
  document.getElementById("sp10").innerHTML = "Invalid Course ID";
}

// The swith statement
var themeId = 4;

switch (themeId) {
  case 1:
    document.getElementById("sp11").innerHTML = "Light Theme";
    break;
  case 2:
    document.getElementById("sp11").innerHTML = "Dark Theme";
    break;
  case 3:
    document.getElementById("sp11").innerHTML = "Nocturne Theme";
    break;
  case 4:
    document.getElementById("sp11").innerHTML = "Terminal Theme";
    break;
  case 5:
    document.getElementById("sp11").innerHTML = "Terminal Theme";
    break;
}

var favColor = "yellow";

switch (favColor) {
  case "blue":
    document.getElementById("sp12").innerHTML = "Your Selected Color Is Blue";
    break;
  case "green":
    document.getElementById("sp12").innerHTML = "Your Selected Color Is Green";
    break;
  case "grey":
    document.getElementById("sp12").innerHTML = "Your Selected Color Is Grey";
    break;
  case "red":
    document.getElementById("sp12").innerHTML = "Your Selected Color Is Red";
    break;
  default:
    document.getElementById("sp12").innerHTML = "Your Selected Color Does Not Exist";
    break;
}

// for loops

for (i = 0; i <= 10; i++) {
  document.getElementById("p1").innerHTML = i + " ";
}
