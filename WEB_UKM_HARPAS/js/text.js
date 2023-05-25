//typewriter effect for the header text
var header = document.querySelector(".typewriter");

var i = 0;
var text = header.textContent;
var speed = 50;

function typeWriter() {
  if (i < text.length) {
    header.textContent = text.substring(0, i) + "_";
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
