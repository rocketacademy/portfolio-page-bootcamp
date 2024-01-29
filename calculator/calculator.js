const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // `=` Calculate
    if (btn.id == "toggleEvaluate") {
      const currentString = result.innerHTML;

      // Is dividing
      if (currentString.includes("/")) {
        const temp = Number(result.innerHTML);

        const splitted = currentString.replaceAll(" ", "").split("/");
        console.log(splitted);
        result.innerHTML = String(
          Number(splitted[0]) / Number(splitted[splitted.length - 1])
        );
        document.getElementById("toggleDivide").classList.remove("active");
      }

      // Is multiplying
      else if (currentString.includes("X")) {
        const splitted = currentString.replaceAll(" ", "").split("X");
        console.log(splitted);
        result.innerHTML = String(
          Number(splitted[0]) * Number(splitted[splitted.length - 1])
        );
        document.getElementById("toggleMultiply").classList.remove("active");
      }

      // Is subtracting
      else if (currentString.includes("-")) {
        const splitted = currentString.replaceAll(" ", "").split("-");
        console.log(splitted);
        result.innerHTML = String(
          Number(splitted[0]) - Number(splitted[splitted.length - 1])
        );
        document.getElementById("toggleSubtract").classList.remove("active");
      }

      // Is adding
      else if (currentString.includes("+")) {
        console.log(result.innerHTML);
        const splitted = currentString.replaceAll(" ", "").split("+");
        console.log(splitted);
        result.innerHTML = String(
          Number(splitted[0]) + Number(splitted[splitted.length - 1])
        );
        document.getElementById("toggleAdd").classList.remove("active");
      }
    }

    // `/` - Divide
    if (btn.id == "toggleDivide") {
      btn.classList.add("active");
      result.innerHTML += " / ";
    }

    // `X` - Multiply
    if (btn.id == "toggleMultiply") {
      btn.classList.add("active");
      result.innerHTML += " X ";
    }
    // `-` - Subtract
    if (btn.id == "toggleSubtract") {
      btn.classList.add("active");
      result.innerHTML += " - ";
    }

    // `+` - Add
    if (btn.id == "toggleAdd") {
      btn.classList.add("active");
      result.innerHTML += " + ";
    }

    // `%` - Express as percentage
    if (btn.id == "togglePercentage") {
      const convertedToNumber = Number(result.innerHTML) / 100;
      result.innerHTML = String(convertedToNumber);
    }

    // `+/-` - Change state
    if (btn.id == "toggleNumberState") {
      const convertedToNumber = Number(result.innerHTML);
      result.innerHTML = String(-convertedToNumber);
    }

    // `AC` - Reset
    if (btn.id == "toggleReset") {
      if (result.innerHTML !== "0") {
        result.innerHTML = "0";
      }
    }

    // `.` - Add dot
    if (btn.id == "toggleDot") {
      if (!result.innerHTML.includes(btn.innerHTML))
        result.innerHTML += btn.innerHTML;
    }

    // Add numbers
    if (btn.id == "number0") {
      const splitted = result.innerHTML.split(" ");
      const last = splitted[splitted.length - 1];
      if (!last.startsWith("0") && splitted.length > 1) result.innerHTML += "0";
      else if (splitted.length === 1) {
        if (!last.startsWith("0")) result.innerHTML += 0;
      }
    }
    if (btn.id == "number1") {
      if (result.innerHTML == "0") result.innerHTML = "1";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number2") {
      if (result.innerHTML == "0") result.innerHTML = "2";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number3") {
      if (result.innerHTML == "0") result.innerHTML = "3";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number4") {
      if (result.innerHTML == "0") result.innerHTML = "4";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number5") {
      if (result.innerHTML == "0") result.innerHTML = "5";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number6") {
      if (result.innerHTML == "0") result.innerHTML = "6";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number7") {
      if (result.innerHTML == "0") result.innerHTML = "7";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number8") {
      if (result.innerHTML == "0") result.innerHTML = "8";
      else result.innerHTML += btn.innerHTML;
    }
    if (btn.id == "number9") {
      if (result.innerHTML == "0") result.innerHTML = "9";
      else result.innerHTML += btn.innerHTML;
    }
  });
});
