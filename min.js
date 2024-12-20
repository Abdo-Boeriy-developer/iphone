var img = document.getElementById("img");
var body = document.querySelector("body");
let iphone = document.querySelector(".iphone");


function phones(phone) {
  img.src = phone;
}

function colors(color) {
  body.style.background = color;
}

function text(text) {
  iphone.innerHTML = text;
}

