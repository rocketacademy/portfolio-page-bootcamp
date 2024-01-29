// rotating welcome message

let welcomeIndex = 0;

let welcomeMessages = ["Herzlich Wilkommen", "いらっしゃいませ", "Welcome"];

let welcomeEmojis = ["😊", "🏝️", "🏡", "👹", "☀️"];

function refreshSidebar() {
  if (welcomeIndex > 13) {
    welcomeIndex = 0;
  } else {
    welcomeIndex += 1;
  }
  document.getElementById("sidebar-title").innerHTML =
    welcomeMessages[Math.floor(welcomeIndex / 5)] +
    "<br/><br/>" +
    welcomeEmojis[welcomeIndex % 5];
}

setInterval(refreshSidebar, 1000);
