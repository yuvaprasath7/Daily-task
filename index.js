// activeElement
// function myFunction() {
//   const element = document.activeElement.tagName;
//   document.getElementById("demo").innerHTML = element;
// }
// addEventListener
// document.addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World!";
// })

// adoptNode
// function adoptnode() {
//   const frame = document.getElementById("myFrame");
//   const div = frame.contentWindow.document.getElementsByTagName("A")[0];
//   const node = document.adoptNode(div);
//   document.body.appendChild(node);
// }

// body
// const myBody = document.body.innerHTML;
// document.getElementById("demo").innerHTML = myBody;

// characterSet
// let encoding = document.characterSet;
// document.getElementById("demo").innerHTML = encoding;

// cookie
// let allCookies = document.cookie;
// document.getElementById("demo").innerHTML = allCookies;
// open close
// function openclose() {
//   document.open();
//   document.write("<h1>Hello World</h1>");
//   document.write("<p>Open a document owerwrites the original content.</p>");
//   document.close();
// }

// createAttribute
// function myFunction() {
//   const att = document.createAttribute("class");
//   att.value = "democlass";
//   document.getElementsByTagName("h1")[0].setAttributeNode(att);
// }

// createElement
// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.getElementById("myDIV").appendChild(para);

// defaultView
// const view = document.defaultView;
// let width = view.innerWidth;
// let height = view.innerHeight;
// document.getElementById("demo").innerHTML = width + "x" + height;

// domain
// let myDomain = document.domain;
// document.getElementById("demo").innerHTML = myDomain;

// embed
// let num = document.embeds.length;
// document.getElementById("demo").innerHTML = num;

// forms
// let num = document.forms.length;
// document.getElementById("demo").innerHTML = num;

// hasFocus
// setInterval("myFunction()", 1);
// function myFunction() {
//   let text;
//   if (document.hasFocus()) {
//     text = "The document has focus.";
//   } else {
//     text = "The document does NOT have focus.";
//   }
// document.getElementById("demo").innerHTML = text;
// }

// images
// let numb = document.images[1].src;
// document.getElementById("demo").innerHTML = numb;

// lastModified
// let text = document.lastModified;
// document.getElementById("demo").innerHTML = text;

// links
// let numb = document.links.length;
// let numb = document.links[0].href  ;
// document.getElementById("demo").innerHTML = numb;

// querySelector and querySelectorAll
// document.querySelectorAll(".example").style.backgroundColor = "red";

// readyState and referrer
// document.getElementById("demo").innerHTML = document.readyState;;

// removeHandler
// document.addEventListener("mousemove", myFunction);
// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }
// function removeHandler() {
// document.removeEventListener("mousemove", myFunction);
// }

// scripts
// document.getElementById("demo").innerHTML = document.scripts.length;

// url and baseURI
// let url = document.URL;
// document.getElementById("demo").innerHTML = url;

// write and writeln
// document.write("Hello World!");
// document.write("Have a nice day!");
// document.write("<br>");
// document.writeln("Hello World!");
// document.writeln("Have a nice day!");

// const arr = [5, 7, 6, 33, 45, 9, 150, 80, 70];
// arr.sort((a, b) => b - a);
// console.log(arr);

function Product(name, price) {
  this.Name = name;
  this.Price = price;
}
function Food(Name, Price) {
  Product.call(this, Name, Price);
}
console.log(new Food("box", 5).Name);

A = "yuvaprasath";
B = A[2];
console.log(B);

function Name(x, y) {
  return x + y;
}
console.log(Name(2, 3));


var arry = [5, 7, 6, 33, 45, 9, 150, 80, 70];
debugger;
function rearrangeArray(arry) {
  const result = [];
  arry.sort((a, b) => a-b);
  let i = 0,
    j = arry.length - 1;
  while (i <= j) {
    result.push(arry[i]);
    i++;
    if (i <= j) {
      result.push(arry[j]);
      j--;
    }
  }
  return result;
}
const result = rearrangeArray(arry);
console.log(result)
