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
