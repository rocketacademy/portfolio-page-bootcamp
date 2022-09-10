// test alert

// alert("working");

// active state of anchor links

let topNavItems = document.getElementById("top-nav-items");
let navLink = topNavItems.getElementsByClassName("nav-link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// video playback speed

document.querySelector("video").playbackRate = 0.5;
