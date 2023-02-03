// getelementsbyclassname

var class1 = document.getElementsByClassName("para1");
var interval1 = setInterval(changer, 1000);
var i = 0;

function changer() {
  class1[i].innerHTML = "Changed by DOM getElemetsByClassName method.";
  i++;

  //   console.log(i);
  if (i >= class1.length) clearInterval(interval1);
}

// working with dom
var id1 = document.getElementById("div1");

function changer1() {
  //   console.log(id1.hasChildNodes);

  var pInId1 = id1.childNodes;
  for (var index = 0; index < pInId1.length; index++) {
    pInId1[index].innerHTML = "Changed by JS via DOM";
  }
}

setTimeout(changer1, 2000);

var id2 = document.getElementById("div1");
console.log(id2);

var nextSibiling = id2.nextElementSibling;
console.log(nextSibiling);

var nextSibilingChildNodes = nextSibiling.childNodes;
console.log(nextSibilingChildNodes);

function changer2() {
  nextSibilingChildNodes[1].innerHTML =
    "The first child node of 'Div1' next element sibiling is changed by JS via DOM in three seconds";
}

setTimeout(changer2, 3000);

// change the source of an image
function imgChanger() {
  document.getElementById("img1").src = "../image/js-sololearn-2.jpg";
}

setTimeout(imgChanger, 3000);

// change the href
function linkChanger() {
  var link1 = document.getElementsByTagName("a");
  link1[0].href = "https://www.apple.com";
}

// i think there would be a better way to do... i'll search that later
function linkChangerDefault() {
  var link2 = document.getElementsByTagName("a");
  link2[0].href = "https://google.com";
}

// Change the color of a div
var changeStyle = document.getElementById("div3");
changeStyle.style.backgroundColor = "dodgerblue";
changeStyle.style.color = "orange";
changeStyle.style.padding = "20px";

// creating a new elements
var element1 = document.createElement("p");
var node1 = document.createTextNode("some texts are added the newly created p element");

element1.appendChild(node1);

var div4 = document.getElementById("div4");

div4.appendChild(element1);

// let's do another sample:
// adding an unordered list to this div

var element2 = document.createElement("ul");
var element2Child = document.createElement("li");
var node2 = document.createTextNode("This is a list.");

element2Child.appendChild(node2);
element2.appendChild(element2Child);

var div5 = document.getElementById("div5");

div5.appendChild(element2);
console.log(div5);

// removing paragraphs from a div
var div6 = document.getElementById("div6");
var div6Child1 = document.getElementById("p1");
var div6Child2 = document.getElementById("p2");

console.log(div6);
console.log(div6Child1);

div6.removeChild(div6Child1);
div6Child2.parentNode.removeChild(div6Child2);

// Replacing elements
var element3 = document.createElement("p");
var node3 = document.createTextNode("This text is replaced with the old one.");

element3.appendChild(node3);

var div7 = document.getElementById("div7");
var p3 = document.getElementById("p3");

div7.replaceChild(element3, p3);

// creating animations
var posHorizontal = 0;
var posVertical = 0;
var box = document.getElementById("box");

function start() {
  var timer1 = setInterval(movingBox, 10);

  function movingBox() {
    posHorizontal += 1;
    box.style.left = posHorizontal + "px";

    if (posHorizontal >= 500) {
      posHorizontal = 499;
      posVertical += 1;
      box.style.top = posVertical + "px";
    }

    console.log(timer1);

    if (posVertical == 200) {
      clearInterval(timer1);
    }
  }
}

// event handler
function alert1() {
  alert("Hello beautiful");
}

var event1 = document.getElementById("but1");
event1.onclick = function () {
  alert("This is called in different way!");
};

function change() {
  var input = document.getElementById("input1");
  input.value = input.value.toUpperCase();
}

//event listener
var but2 = document.getElementById("but2");
but2.addEventListener("click", myFunc);
but2.addEventListener("mouseover", changeColor);

function myFunc() {
  alert(Math.random().toFixed(2));
}

function changeColor() {
  but2.style.color = "Blue";
  but2.style.fontSize = "20px";
  but2.removeEventListener("mouseover", changeColor);
}


