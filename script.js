var i = 0;
var txt = `developer-in-progress`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("excerpt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

function myFunction() {
  var x = document.getElementById("my-topnav");
  if (x.className === "my-navbar") {
    x.className += " responsive";
  } else {
    x.className = "my-navbar";
  }
}

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
