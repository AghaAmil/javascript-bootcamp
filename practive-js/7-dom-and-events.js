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

var nextSibilingFirstChild = nextSibiling.childNodes;
console.log(nextSibilingFirstChild);

function changer2() {
  nextSibilingFirstChild[0].innerHTML =
    "The first child of 'Div1' next sibiling is changed by JS via DOM in three seconds";
}

setTimeout(changer2, 3000);
