// getelementsbyclassname

let class1 = document.getElementsByClassName("para1");
let interval1 = setInterval(changer, 1000);
let i = 0;

function changer() {
    class1[i].innerHTML = "Changed by DOM getElementsByClassName method.";
    i++;

    //   console.log(i);
    if (i >= class1.length) clearInterval(interval1);
}

// working with dom
let id1 = document.getElementById("div1");

function changer1() {
    //   console.log(id1.hasChildNodes);

    let pInId1 = id1.childNodes;
    for (let index = 0; index < pInId1.length; index++) {
        pInId1[index].innerHTML = "Changed by JS via DOM";
    }
}

setTimeout(changer1, 2000);

let id2 = document.getElementById("div1");
console.log(id2);

let nextSibling = id2.nextElementSibling;
console.log(nextSibling);

let nextSiblingChildNodes = nextSibling.childNodes;
console.log(nextSiblingChildNodes);

function changer2() {
    nextSibilingChildNodes[1].innerHTML =
        "The first child node of 'Div1' next element sibling is changed by JS via DOM in three seconds";
}

setTimeout(changer2, 3000);

// change the source of an image
function imgChanger() {
    document.getElementById("img1").src = "../image/js-sololearn-2.jpg";
}

setTimeout(imgChanger, 3000);

// change the href
function linkChanger() {
    let link1 = document.getElementsByTagName("a");
    link1[0].href = "https://www.apple.com";
}

// i think there would be a better way to do... i'll search that later
function linkChangerDefault() {
    let link2 = document.getElementsByTagName("a");
    link2[0].href = "https://google.com";
}

// Change the color of a div
let changeStyle = document.getElementById("div3");
changeStyle.style.backgroundColor = "dodgerblue";
changeStyle.style.color = "orange";
changeStyle.style.padding = "20px";

// creating a new elements
let element1 = document.createElement("p");
let node1 = document.createTextNode("some texts are added the newly created p element");

element1.appendChild(node1);

let div4 = document.getElementById("div4");

div4.appendChild(element1);

// let's do another sample:
// adding an unordered list to this div

let element2 = document.createElement("ul");
let element2Child = document.createElement("li");
let node2 = document.createTextNode("This is a list.");

element2Child.appendChild(node2);
element2.appendChild(element2Child);

let div5 = document.getElementById("div5");

div5.appendChild(element2);
console.log(div5);

// removing paragraphs from a div
let div6 = document.getElementById("div6");
let div6Child1 = document.getElementById("p1");
let div6Child2 = document.getElementById("p2");

console.log(div6);
console.log(div6Child1);

div6.removeChild(div6Child1);
div6Child2.parentNode.removeChild(div6Child2);

// Replacing elements
let element3 = document.createElement("p");
let node3 = document.createTextNode("This text is replaced with the old one.");

element3.appendChild(node3);

let div7 = document.getElementById("div7");
let p3 = document.getElementById("p3");

div7.replaceChild(element3, p3);

// creating animations
let posHorizontal = 0;
let posVertical = 0;
let box = document.getElementById("box");

function start() {
    let timer1 = setInterval(movingBox, 10);

    function movingBox() {
        posHorizontal += 1;
        box.style.left = posHorizontal + "px";

        if (posHorizontal >= 500) {
            posHorizontal = 499;
            posVertical += 1;
            box.style.top = posVertical + "px";
        }

        console.log(timer1);

        if (posVertical === 200) {
            clearInterval(timer1);
        }
    }
}

// event handler
function alert1() {
    alert("Hello beautiful");
}

let event1 = document.getElementById("but1");
event1.onclick = function () {
    alert("This is called in different way!");
};

function change() {
    let input = document.getElementById("input1");
    input.value = input.value.toUpperCase();
}

//event listener
let but2 = document.getElementById("but2");
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

// image slider
let imgContainer = [
    "../image/js-sololearn-1.jpg",
    "../image/js-sololearn-2.jpg",
    "../image/js-sololearn-3.jpg",
];

let num = 0;

function nextImg() {
    let image = document.getElementById("image");
    num++;

    if (num >= imgContainer.length) {
        num = 0;
    }
    image.src = imgContainer[num];
}

function prevImg() {
    let image = document.getElementById("image");
    num--;

    if (num < 0) {
        num = imgContainer.length - 1;
    }
    image.src = imgContainer[num];
}

// form validation
function validate() {
    let form1 = document.getElementById("value1");
    let form2 = document.getElementById("value2");

    if (form1.value !== "" && form2.value !== "") {
        if (form1.value === form2.value) {
            return true;
        }
    }

    alert("The values should be equal and not blank");
    return false;
}
