// navigation
let toggleNav = () =>{
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  console.log(document.body.dataset.nav)
}

const toggleBtn = document.getElementById("nav-toggle")

toggleBtn.addEventListener("click",toggleNav)