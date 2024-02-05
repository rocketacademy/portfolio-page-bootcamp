// input constraints

document.getElementById("birthday").max = new Date()
  .toISOString()
  .split("T")[0];

// defaults and constants

let name = "Rayner";

let birthday = new Date("January 8, 1997 00:00:00");

let msInYear = 365 * 24 * 60 * 60 * 1000;

// battery level mechanism

function refreshTime() {
  let yearsPassed = (Date.now() - birthday) / msInYear;

  let expectancyYears = 83;

  let yearsLeft = Math.round((expectancyYears - yearsPassed) * 100) / 100;

  let percentageLeft = yearsLeft / expectancyYears;

  document.getElementById("batteryLevel").style.width =
    percentageLeft * 50 + "%";

  document.getElementById("timeLeft").textContent =
    name + "'s time left: " + yearsLeft + " years.";
}

setInterval(refreshTime, 1000);

// name replace event handler

document.getElementById("birthday-send").addEventListener("click", () => {
  birthday = new Date(document.getElementById("birthday").value);
  name = document.getElementById("name").value;
  if (name == "") {
    name = "User";
  }
});
