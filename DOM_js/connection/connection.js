

var x = document.getElementsByTagName("h1");        // select using tagName.
console.log(x);

// var title = document.getElementById("title");       // select using ID.
// console.log(title);

var many = document.getElementsByClassName("many");     // select using ClassName.
console.log(many);
console.log(many[0]);
console.log(many[1]);



document.getElementById("title").style.color="red";         // using style.

document.getElementById("title").style.removeProperty("color");     // remove style in web page.

    // connection
var img = document.getElementById("img");
    // getAttribute
console.log(img.getAttribute("src"));
    // setAttribute
img.setAttribute("alt", "profile picture");
    // getAttribute
console.log(img.getAttribute("alt"));

    // add classList
img.classList.add("textclass");
console.log(img);

    // view innerText view.
var hero = document.getElementById("hero").innerText;
console.log(hero);

    // form or input field value view.
var input = document.getElementById("input").value;
console.log(input);

    // view innerHTML code.
var parent = document.getElementById("parent").innerHTML;
console.log(parent);


var test = document.getElementsByClassName("test");
// console.log(test[0].childNodes[1].parentNode.parentNode.parentNode);


    // create element and append .
var newDiv = document.getElementById("newDiv");
var p = document.createElement("p").innerText = "Sumon Debnath Manu from jashore.";
newDiv.append(p);


    // using function and create and append element.
function creApp() {
    var h = document.createElement("h4");
    h.innerText = "My Name is Sum On.";
    newDiv.append(h);
}
    // function call.
creApp();