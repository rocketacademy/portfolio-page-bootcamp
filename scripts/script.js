// navigation
let toggleNav = () =>{
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  console.log(document.body.dataset.nav)
}

const toggleBtn = document.getElementById("nav-toggle")

toggleBtn.addEventListener("click",toggleNav)


// modals

const openAboutModal = document.querySelector(".about-link");
const closeModal = document.querySelector(".modalClose");
const aboutModal = document.querySelector(".modal-about");

openAboutModal.addEventListener("click", ()=>{
  aboutModal.showModal()
  aboutModal.classList.add("show");
  console.log("showModal Clicked");
});
closeModal.addEventListener("click", ()=>{
  aboutModal.close();
  aboutModal.classList.remove("show")
  console.log("closeModal Clicked");
})