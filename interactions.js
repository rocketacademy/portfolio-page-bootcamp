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

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let allSlides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("slider-dots");
  if (n > allSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = allSlides.length;
  }
  for (i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  allSlides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
