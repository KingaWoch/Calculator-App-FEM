const result = document.getElementById("result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");

// result.addEventListener("input", () => {
//   result.innerText = number.innerText;
//   displayNumbers();
// });

// function displayNumbers(event) {
//   numbers.forEach((number) => {
//     if (event.target.innerHTML == number.innerHTML) {
//       result.innerText = number.innerText;
//     }
//   });
//   console.log(result);
// }

// function deleteLastNumber() {}

// function clearScreen() {}

// function showResult() {}

// Listening

// numbers.forEach((number) => {
//   number.addEventListener("click", displayNumbers);
// });

// deleteButton.addEventListener("click", deleteLastNumber);

// reset.addEventListener("click", clearScreen);

// equals.addEventListener("click", showResult);

// themes

const buttons = document.querySelectorAll(".theme-btn");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.toggle("active");
    } else {
      buttons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
    }
  })
);
