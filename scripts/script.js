// navigation
let toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
  console.log(document.body.dataset.nav);
};

const toggleBtn = document.getElementById("nav-toggle");

toggleBtn.addEventListener("click", toggleNav);

// modals

const openAboutModal = document.querySelector(".about-link");
const openContactModal = document.querySelector(".contact-link");
const closeAboutModal = document.querySelector(".close-about");
const closeContactModal = document.querySelector(".close-contact");
const aboutModal = document.querySelector(".modal-about");
const contactModal = document.querySelector(".modal-contact");

openAboutModal.addEventListener("click", () => {
  aboutModal.showModal();
  aboutModal.classList.add("show");
  console.log("showModal Clicked");
});
openContactModal.addEventListener("click", () => {
  contactModal.showModal();
  contactModal.classList.add("show");
  console.log("contactModal Clicked");
});

closeAboutModal.addEventListener("click", () => {
  aboutModal.close();
  aboutModal.classList.remove("show");
  console.log("closeModal Clicked");
});
closeContactModal.addEventListener("click", () => {
  contactModal.close();
  contactModal.classList.remove("show");
  console.log("closeModal Clicked");
});
