window.onload = function () {
  console.log("start");
  calculator.init();
};

let calculator = {
  buttons: undefined,
  result: undefined,

  init: function () {
    this.buttons = document.querySelectorAll(".keypad button");
    this.result = document.getElementById("result");
    for (let i = 0; i < this.buttons.length; i++) {
      let button = this.buttons[i];
      button.addEventListener("click", this.buttonClick);
    }
  },

  buttonClick: function (e) {
    let inputText = e.target.innerHTML;
    // console.log("clicked: " + inputText);

    switch (inputText) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "/":
      case "*":
      case "-":
      case "+":
        calculator.addToInput(inputText);
        break;
      case "=":
        calculator.evaluate();
        break;
      case "DEL":
        calculator.delete();
        break;
      case "RESET":
        calculator.reset();
    }
  },

  addToInput: function (str) {
    if (this.result.value === "." && str === ".") return;
    else {
      this.result.value += str;
    }
  },

  evaluate: function () {
    if (calculator.result.value === "") return;
    let equals = eval(calculator.result.value);
    calculator.setInput(equals);
  },

  delete: function () {
    calculator.result.value = calculator.result.value.toString().slice(0, -1);
  },

  reset: function () {
    calculator.result.value = "";
  },

  setInput: function (str) {
    calculator.result.value = str;
  },
};

// themes

const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.querySelector("body");
const firstTheme = document.querySelector(".theme-1");
const secondTheme = document.querySelector(".theme-2");
const thirdTheme = document.querySelector(".theme-3");

themeButtons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.toggle("active");
    } else {
      themeButtons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
    }
    if (button.classList.contains("active")) {
    }
  })
);

firstTheme.addEventListener("click", () => {
  body.classList.add("active-1");
  body.classList.remove("active-2");
  body.classList.remove("active-3");
});

secondTheme.addEventListener("click", () => {
  body.classList.add("active-2");
  body.classList.remove("active-1");
  body.classList.remove("active-3");
});

thirdTheme.addEventListener("click", () => {
  body.classList.add("active-3");
  body.classList.remove("active-1");
  body.classList.remove("active-2");
});
